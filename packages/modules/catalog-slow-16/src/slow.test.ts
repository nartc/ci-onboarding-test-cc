import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { partCount } from './generated/index.js';

const seconds = Number(process.env['CI_LAB_SLOW_SECONDS'] ?? 3);

describe('slow test', () => {
  it('ships every generated part', () => {
    expect(partCount).toBe(150);
  });

  it(
    `hashes for ${seconds}s on one core`,
    () => {
      const end = Date.now() + seconds * 1000;
      let hash = 'seed';
      let rounds = 0;
      while (Date.now() < end) {
        hash = createHash('sha256').update(hash).digest('hex');
        rounds++;
      }
      expect(rounds).toBeGreaterThan(0);
    },
    (seconds + 60) * 1000,
  );
});
