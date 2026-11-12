// Checks that Nx Cloud CI hands its stored variables to the machine running this task.
// Secrets are compared by SHA-256 and never printed.
import { createHash } from 'node:crypto';
import { hostname } from 'node:os';

const EXPECTED_SECRET_SHA256 = '21dbb20b6208fc887d7ec280783bab9ba7d3faf48723583e925ff0300b96da60';
const EXPECTED_VAR = 'nx-cloud-ci-lab';

const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const required = process.env.CI_LAB_REQUIRE_SECRETS === 'true';
const failures = [];

const checkSecret = (name, { optional = false } = {}) => {
  const value = process.env[name];
  if (!value) {
    if (!optional) failures.push(`${name} is not set`);
    console.log(`${name}: ${optional ? 'not set (optional)' : 'MISSING'}`);
    return;
  }
  const ok = sha256(value) === EXPECTED_SECRET_SHA256;
  if (!ok) failures.push(`${name} does not match the expected value`);
  console.log(`${name}: ${ok ? 'matches' : 'MISMATCH'} (${value.length} chars)`);
};

console.log(
  `env-check on ${hostname()} (${process.platform}/${process.arch}, node ${process.version})`,
);

if (!required) {
  console.log('CI_LAB_REQUIRE_SECRETS is not "true", skipping the checks.');
  process.exit(0);
}

// Mapped from secrets.CI_LAB_SECRET in the top-level env of the pipeline.
checkSecret('CI_LAB_SECRET');
// Mapped again in the env of the lab-arm launch template, so only set on those workers.
checkSecret('CI_LAB_SECRET_FROM_TEMPLATE', { optional: true });

// Mapped from vars.CI_LAB_VAR, a plain (non-secret) variable, so it is safe to print.
const labVar = process.env.CI_LAB_VAR;
console.log(`CI_LAB_VAR: ${labVar ?? 'MISSING'}`);
if (labVar !== EXPECTED_VAR)
  failures.push(`CI_LAB_VAR is "${labVar ?? ''}", expected "${EXPECTED_VAR}"`);

if (failures.length) {
  console.error(`env-check failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}
console.log('env-check passed');
