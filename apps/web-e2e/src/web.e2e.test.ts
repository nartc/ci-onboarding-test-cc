import { sdkMocksModule } from '@ci/sdk-mocks';
import { render, webModule } from '@ci/web';
import { beforeAll, describe, expect, it } from 'vitest';

// Started by the continuous @ci/web:serve task this e2e target depends on.
const base = process.env['WEB_URL'] ?? 'http://127.0.0.1:4320';

beforeAll(async () => {
  const end = Date.now() + 60_000;
  while (Date.now() < end) {
    try {
      if ((await fetch(`${base}/`)).ok) return;
    } catch {
      // not up yet
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`${base} did not come up within 60s`);
}, 70_000);

describe('web over http', () => {
  it('serves a full document', async () => {
    const html = await (await fetch(`${base}/checkout`)).text();
    expect(html.startsWith('<!doctype html>')).toBe(true);
    expect(html).toContain('<h1>web /checkout</h1>');
    expect(html.match(/<li>/g)).toHaveLength(23);
  });

  it('serves what render() returns', async () => {
    expect(await (await fetch(`${base}/cart`)).text()).toBe(render('/cart'));
  });

  it('uses the same sdk as the mocks', () => {
    const sdk = sdkMocksModule.deps.find((d) => d.name === '@ci/sdk');
    expect(webModule.deps).toContain(sdk);
  });
});
