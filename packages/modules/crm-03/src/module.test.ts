import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { crm03Module } from './module.js';

describe('@ci/crm-03', () => {
  it('declares its direct dependencies', () => {
    expect(crm03Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/audit',
      '@ci/crm-02',
      '@ci/checkout-flaky-05',
    ]);
  });

  it('sits at depth 20 of the graph', () => {
    expect(depthOf(crm03Module)).toBe(20);
  });

  it('reaches all 50 transitive dependencies', () => {
    expect(transitiveNames(crm03Module)).toEqual([
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
      '@ci/checkout-flaky-05',
      '@ci/checkout-slow-04',
      '@ci/config',
      '@ci/constants',
      '@ci/crm-02',
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
