import { gatewayModule } from '@ci/gateway';
import { sdkMocksModule } from '@ci/sdk-mocks';
import { beforeAll, describe, expect, it } from 'vitest';

// Started by the continuous @ci/gateway:serve task this e2e target depends on.
const base = process.env['GATEWAY_URL'] ?? 'http://127.0.0.1:4330';

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

describe('gateway over http', () => {
  it('lists the domains', async () => {
    const res = await fetch(`${base}/domains`);
    expect(await res.json()).toEqual([
      '@ci/catalog',
      '@ci/checkout',
      '@ci/crm',
      '@ci/finance',
      '@ci/fulfillment',
      '@ci/identity',
      '@ci/marketing',
      '@ci/pricing',
      '@ci/support',
      '@ci/warehouse',
    ]);
  });

  it('reaches every module', async () => {
    const res = await fetch(`${base}/modules`);
    expect((await res.json()) as string[]).toHaveLength(245);
  });

  it('reports its depth', async () => {
    const res = await fetch(`${base}/depth`);
    expect(await res.json()).toEqual({ depth: 34 });
  });

  it('shares the sdk mocks with the rest of the workspace', () => {
    expect(sdkMocksModule.name).toBe('@ci/sdk-mocks');
    expect(gatewayModule.name).toBe('@ci/gateway');
  });
});
