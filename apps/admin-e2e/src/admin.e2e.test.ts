import { adminModule, render } from '@ci/admin';
import { sdkMocksModule } from '@ci/sdk-mocks';
import { describe, expect, it } from 'vitest';

describe('admin rendering', () => {
  it('renders a table of modules', () => {
    const html = render('/reports');
    expect(html).toContain('<h1>admin /reports</h1>');
    expect(html.match(/<tr>/g)).toHaveLength(35);
  });

  it('uses the same sdk as the mocks', () => {
    const sdk = sdkMocksModule.deps.find((d) => d.name === '@ci/sdk');
    expect(adminModule.deps).toContain(sdk);
  });
});
