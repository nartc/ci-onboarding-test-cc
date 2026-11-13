import { apiModule } from '@ci/api';
import { sdkMocksModule } from '@ci/sdk-mocks';
import { beforeAll, describe, expect, it } from 'vitest';

// Started by the continuous @ci/api:serve task this e2e target depends on.
const base = process.env['API_URL'] ?? 'http://127.0.0.1:4310';

beforeAll(async () => {
  const end = Date.now() + 60_000;
  while (Date.now() < end) {
    try {
      if ((await fetch(`${base}/health`)).ok) return;
    } catch {
      // not up yet
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`${base} did not come up within 60s`);
}, 70_000);

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
