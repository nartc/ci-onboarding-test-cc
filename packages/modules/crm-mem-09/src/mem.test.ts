import { describe, expect, it } from 'vitest';

const mb = Number(process.env['CI_LAB_MEM_MB'] ?? 2048);
const CHUNK_MB = 256;

describe('memory-heavy test', () => {
  it(`holds ${mb} MB for 2s`, async () => {
    const chunks: Buffer[] = [];
    for (let i = 0; i < Math.ceil(mb / CHUNK_MB); i++) {
      // A fill value writes every page, so the memory is really used.
      chunks.push(Buffer.alloc(CHUNK_MB * 1024 * 1024, i % 255));
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(chunks.reduce((total, c) => total + c.length, 0)).toBeGreaterThanOrEqual(
      mb * 1024 * 1024,
    );
  }, 120_000);
});
