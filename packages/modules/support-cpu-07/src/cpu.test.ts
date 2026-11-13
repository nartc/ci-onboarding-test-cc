import { availableParallelism } from 'node:os';
import { Worker } from 'node:worker_threads';
import { describe, expect, it } from 'vitest';

const seconds = Number(process.env['CI_LAB_CPU_SECONDS'] ?? 5);
const cores = Math.min(availableParallelism(), 16);

function burn(ms: number): Promise<number> {
  const code = `
    const { parentPort, workerData } = require('node:worker_threads');
    const end = Date.now() + workerData;
    let x = 0;
    while (Date.now() < end) x = (x * 31 + 7) % 1000003;
    parentPort.postMessage(x);
  `;
  return new Promise((resolve, reject) => {
    const worker = new Worker(code, { eval: true, workerData: ms });
    worker.once('message', resolve);
    worker.once('error', reject);
  });
}

describe('cpu-heavy test', () => {
  it(
    `keeps ${cores} cores busy for ${seconds}s`,
    async () => {
      const results = await Promise.all(Array.from({ length: cores }, () => burn(seconds * 1000)));
      expect(results).toHaveLength(cores);
    },
    (seconds + 60) * 1000,
  );
});
