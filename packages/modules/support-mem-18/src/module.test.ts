import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { supportMem18Module } from './module.js';

describe('@ci/support-mem-18', () => {
  it('declares its direct dependencies', () => {
    expect(supportMem18Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/notifications',
      '@ci/support-17',
      '@ci/support-10',
    ]);
  });

  it('sits at depth 30 of the graph', () => {
    expect(depthOf(supportMem18Module)).toBe(30);
  });

  it('reaches all 61 transitive dependencies', () => {
    expect(transitiveNames(supportMem18Module)).toEqual([
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
