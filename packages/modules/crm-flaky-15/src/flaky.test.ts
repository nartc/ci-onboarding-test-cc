import { describe, expect, it } from 'vitest';

// The rate is not a task input, so a failure and a pass share one task hash. That is how
// Nx Cloud spots flaky tasks and retries them on another worker.
const rate = Number(process.env['CI_LAB_FLAKE_RATE'] ?? 0);

describe('flaky test', () => {
  it('passes most of the time', () => {
    const roll = Math.random();
    expect(roll, `rolled ${roll.toFixed(3)}, under the flake rate ${rate}`).toBeGreaterThanOrEqual(
      rate,
    );
  });
});
