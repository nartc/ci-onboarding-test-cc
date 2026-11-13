import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { support19Module } from './module.js';

describe('@ci/support-19', () => {
  it('declares its direct dependencies', () => {
    expect(support19Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/users',
      '@ci/support-mem-18',
    ]);
  });

  it('sits at depth 31 of the graph', () => {
    expect(depthOf(support19Module)).toBe(31);
  });

  it('reaches all 62 transitive dependencies', () => {
    expect(transitiveNames(support19Module)).toEqual([
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
      '@ci/pricing-01',
      '@ci/pricing-03',
      '@ci/pricing-06',
      '@ci/pricing-cpu-07',
      '@ci/queue',
      '@ci/recommendations',
      '@ci/reports',
      '@ci/result',
      '@ci/schema',
      '@ci/search',
      '@ci/serializer',
      '@ci/shipping',
      '@ci/storage',
      '@ci/support-01',
      '@ci/support-02',
      '@ci/support-06',
      '@ci/support-10',
      '@ci/support-17',
      '@ci/support-flaky-05',
      '@ci/support-flaky-15',
      '@ci/support-mem-09',
      '@ci/support-mem-18',
      '@ci/support-slow-04',
      '@ci/support-slow-16',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
