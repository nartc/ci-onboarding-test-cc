import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { warehouseSlow20Module } from './module.js';

describe('@ci/warehouse-slow-20', () => {
  it('declares its direct dependencies', () => {
    expect(warehouseSlow20Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/events',
      '@ci/shipping',
      '@ci/billing',
      '@ci/warehouse-19',
    ]);
  });

  it('sits at depth 26 of the graph', () => {
    expect(depthOf(warehouseSlow20Module)).toBe(26);
  });

  it('reaches all 51 transitive dependencies', () => {
    expect(transitiveNames(warehouseSlow20Module)).toEqual([
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
      '@ci/payments',
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
      '@ci/support-slow-12',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
      '@ci/warehouse-02',
      '@ci/warehouse-19',
    ]);
  });
});
