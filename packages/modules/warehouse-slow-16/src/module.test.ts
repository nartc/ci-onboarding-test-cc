import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { warehouseSlow16Module } from './module.js';

describe('@ci/warehouse-slow-16', () => {
  it('declares its direct dependencies', () => {
    expect(warehouseSlow16Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/schema',
      '@ci/events',
      '@ci/warehouse-flaky-15',
    ]);
  });

  it('sits at depth 27 of the graph', () => {
    expect(depthOf(warehouseSlow16Module)).toBe(27);
  });

  it('reaches all 54 transitive dependencies', () => {
    expect(transitiveNames(warehouseSlow16Module)).toEqual([
      '@ci/analytics',
      '@ci/audit',
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
      '@ci/feature-flags',
      '@ci/http',
      '@ci/i18n',
      '@ci/identity-10',
      '@ci/inventory',
      '@ci/logger',
      '@ci/marketing-01',
      '@ci/marketing-03',
      '@ci/marketing-10',
      '@ci/marketing-11',
      '@ci/marketing-13',
      '@ci/marketing-cpu-14',
      '@ci/marketing-flaky-15',
      '@ci/marketing-mem-09',
      '@ci/marketing-slow-08',
      '@ci/marketing-slow-12',
      '@ci/marketing-slow-16',
      '@ci/metrics',
      '@ci/notifications',
      '@ci/orders',
      '@ci/pricing-03',
      '@ci/queue',
      '@ci/recommendations',
      '@ci/reports',
      '@ci/result',
      '@ci/schema',
      '@ci/search',
      '@ci/serializer',
      '@ci/shipping',
      '@ci/storage',
      '@ci/support-flaky-15',
      '@ci/support-slow-12',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
      '@ci/warehouse-06',
      '@ci/warehouse-13',
      '@ci/warehouse-cpu-07',
      '@ci/warehouse-cpu-14',
      '@ci/warehouse-flaky-15',
    ]);
  });
});
