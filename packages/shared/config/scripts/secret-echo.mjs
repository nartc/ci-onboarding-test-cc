// Prints CI_LAB_SECRET on purpose, in several shapes, to see what Nx Cloud CI redacts in task
// logs. CI_LAB_SECRET is a throwaway lab value. Never point this at a real secret.
const secret = process.env.CI_LAB_SECRET ?? '';
if (!secret) {
  console.log('CI_LAB_SECRET is not set, nothing to print.');
  process.exit(0);
}

const half = secret.slice(0, Math.floor(secret.length / 2));
console.log(`1. exact value:      ${secret}`);
console.log(`2. inside a word:    before${secret}after`);
console.log(`3. first half:       ${half}`);
console.log(`4. base64:           ${Buffer.from(secret).toString('base64')}`);
console.log(`5. reversed:         ${[...secret].reverse().join('')}`);
console.log(`6. spaced out:       ${[...secret].join(' ')}`);
console.log(`7. upper case:       ${secret.toUpperCase()}`);
console.error(`8. on stderr:        ${secret}`);
console.log('Compare the lines above with the value: an exact match should show as masked.');
