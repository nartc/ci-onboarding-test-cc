import { sdkMocksModule } from '@ci/sdk-mocks';
import { render, webModule } from '@ci/web';
import { describe, expect, it } from 'vitest';

describe('web rendering', () => {
  it('renders a full document', () => {
    const html = render('/checkout');
    expect(html.startsWith('<!doctype html>')).toBe(true);
    expect(html).toContain('<h1>web /checkout</h1>');
    expect(html.match(/<li>/g)).toHaveLength(23);
  });

  it('uses the same sdk as the mocks', () => {
    const sdk = sdkMocksModule.deps.find((d) => d.name === '@ci/sdk');
    expect(webModule.deps).toContain(sdk);
  });
});
