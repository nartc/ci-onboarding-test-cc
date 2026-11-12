import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { finance17Module } from './module.js';

describe('@ci/finance-17', () => {
  it('declares its direct dependencies', () => {
    expect(finance17Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/shipping',
      '@ci/serializer',
      '@ci/finance-slow-16',
    ]);
  });

  it('sits at depth 29 of the graph', () => {
    expect(depthOf(finance17Module)).toBe(29);
  });

  it('reaches all 68 transitive dependencies', () => {
    expect(transitiveNames(finance17Module)).toEqual([
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
      '@ci/checkout-03',
      '@ci/checkout-10',
      '@ci/checkout-flaky-05',
      '@ci/checkout-slow-04',
      '@ci/config',
      '@ci/constants',
      '@ci/crm-01',
      '@ci/crm-02',
      '@ci/crm-03',
      '@ci/crm-06',
      '@ci/crm-13',
      '@ci/crm-cpu-07',
      '@ci/crm-flaky-05',
      '@ci/crm-mem-09',
      '@ci/crm-slow-04',
      '@ci/crm-slow-08',
      '@ci/crypto',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/feature-flags',
      '@ci/finance-01',
      '@ci/finance-06',
      '@ci/finance-flaky-05',
      '@ci/finance-flaky-15',
      '@ci/finance-slow-04',
      '@ci/finance-slow-16',
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
      '@ci/reports',
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
