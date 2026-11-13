import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { checkoutFlaky15Module } from './module.js';

describe('@ci/checkout-flaky-15', () => {
  it('declares its direct dependencies', () => {
    expect(checkoutFlaky15Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/serializer',
      '@ci/crypto',
      '@ci/checkout-cpu-14',
    ]);
  });

  it('sits at depth 22 of the graph', () => {
    expect(depthOf(checkoutFlaky15Module)).toBe(22);
  });

  it('reaches all 54 transitive dependencies', () => {
    expect(transitiveNames(checkoutFlaky15Module)).toEqual([
      '@ci/analytics',
      '@ci/audit',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/catalog-01',
      '@ci/catalog-02',
      '@ci/catalog-03',
      '@ci/catalog-06',
      '@ci/catalog-10',
      '@ci/catalog-11',
      '@ci/catalog-cpu-07',
      '@ci/catalog-flaky-05',
      '@ci/catalog-mem-09',
      '@ci/catalog-slow-04',
      '@ci/catalog-slow-08',
      '@ci/checkout-01',
      '@ci/checkout-02',
      '@ci/checkout-13',
      '@ci/checkout-cpu-07',
      '@ci/checkout-cpu-14',
      '@ci/checkout-flaky-05',
      '@ci/checkout-mem-09',
      '@ci/checkout-slow-04',
      '@ci/checkout-slow-08',
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
      '@ci/notifications',
      '@ci/orders',
      '@ci/payments',
      '@ci/queue',
      '@ci/recommendations',
      '@ci/result',
      '@ci/schema',
      '@ci/search',
      '@ci/serializer',
      '@ci/shipping',
      '@ci/storage',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
