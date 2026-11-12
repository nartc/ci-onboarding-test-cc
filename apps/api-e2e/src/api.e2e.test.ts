import type { AddressInfo } from 'node:net';
import { apiModule, createApp } from '@ci/api';
import { sdkMocksModule } from '@ci/sdk-mocks';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

const server = createApp();
let base = '';

beforeAll(async () => {
  await new Promise<void>((resolve) => server.listen(0, resolve));
  base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});

afterAll(async () => {
  await new Promise<void>((resolve, reject) =>
    server.close((err) => (err ? reject(err) : resolve())),
  );
});

describe('api over http', () => {
  it('is healthy', async () => {
    const res = await fetch(`${base}/health`);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ status: 'ok' });
  });

  it('lists every module behind the api', async () => {
    const res = await fetch(`${base}/modules`);
    const modules = (await res.json()) as string[];
    expect(modules).toContain('@ci/orders');
    expect(modules).toContain('@ci/types');
    expect(modules).toHaveLength(34);
  });

  it('404s on unknown routes', async () => {
    expect((await fetch(`${base}/nope`)).status).toBe(404);
  });

  it('shares the sdk schema with the mocks', () => {
    expect(sdkMocksModule.deps.map((d) => d.name)).toContain('@ci/schema');
    expect(apiModule.name).toBe('@ci/api');
  });
});
