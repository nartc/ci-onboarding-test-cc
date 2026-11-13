import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { checkoutSlow20Module } from './module.js';

describe('@ci/checkout-slow-20', () => {
  it('declares its direct dependencies', () => {
    expect(checkoutSlow20Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/i18n',
      '@ci/checkout-19',
      '@ci/catalog-19',
    ]);
  });

  it('sits at depth 18 of the graph', () => {
    expect(depthOf(checkoutSlow20Module)).toBe(18);
  });

  it('reaches all 43 transitive dependencies', () => {
    expect(transitiveNames(checkoutSlow20Module)).toEqual([
      '@ci/analytics',
      '@ci/audit',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/catalog-01',
      '@ci/catalog-03',
      '@ci/catalog-10',
      '@ci/catalog-19',
      '@ci/catalog-cpu-07',
      '@ci/catalog-mem-09',
      '@ci/catalog-slow-04',
      '@ci/catalog-slow-08',
      '@ci/checkout-02',
      '@ci/checkout-19',
      '@ci/checkout-mem-18',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/feature-flags',
      '@ci/http',
      '@ci/i18n',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/payments',
      '@ci/queue',
      '@ci/recommendations',
      '@ci/result',
      '@ci/schema',
      '@ci/search',
      '@ci/serializer',
      '@ci/storage',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
