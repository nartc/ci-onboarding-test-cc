import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { adminModule, render } from './app.js';

describe('@ci/admin', () => {
  it('declares its direct dependencies', () => {
    expect(adminModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/ui-charts',
      '@ci/ui-forms',
      '@ci/ui-layout',
      '@ci/sdk',
      '@ci/reports',
      '@ci/analytics',
    ]);
  });

  it('sits at depth 14 of the graph', () => {
    expect(depthOf(adminModule)).toBe(14);
  });

  it('reaches all 35 transitive dependencies', () => {
    expect(transitiveNames(adminModule)).toEqual([
      '@ci/analytics',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/http',
      '@ci/i18n',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/queue',
      '@ci/reports',
      '@ci/result',
      '@ci/schema',
      '@ci/sdk',
      '@ci/serializer',
      '@ci/storage',
      '@ci/tracing',
      '@ci/types',
      '@ci/ui-charts',
      '@ci/ui-components',
      '@ci/ui-forms',
      '@ci/ui-layout',
      '@ci/ui-primitives',
      '@ci/ui-tokens',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });

  it('renders modules', () => {
    expect(render('/')).toContain('<td>@ci/reports</td>');
  });
});
