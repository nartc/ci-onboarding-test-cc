import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { warehouseCpu14Module } from './module.js';

describe('@ci/warehouse-cpu-14', () => {
  it('declares its direct dependencies', () => {
    expect(warehouseCpu14Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/metrics',
      '@ci/db',
      '@ci/warehouse-13',
      '@ci/warehouse-cpu-07',
    ]);
  });

  it('sits at depth 25 of the graph', () => {
    expect(depthOf(warehouseCpu14Module)).toBe(25);
  });

  it('reaches all 51 transitive dependencies', () => {
    expect(transitiveNames(warehouseCpu14Module)).toEqual([
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
      '@ci/support-slow-12',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
      '@ci/warehouse-06',
      '@ci/warehouse-13',
      '@ci/warehouse-cpu-07',
    ]);
  });
});
