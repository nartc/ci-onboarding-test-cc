import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { marketingMem18Module } from './module.js';

describe('@ci/marketing-mem-18', () => {
  it('declares its direct dependencies', () => {
    expect(marketingMem18Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/http',
      '@ci/marketing-17',
      '@ci/marketing-flaky-05',
    ]);
  });

  it('sits at depth 23 of the graph', () => {
    expect(depthOf(marketingMem18Module)).toBe(23);
  });

  it('reaches all 50 transitive dependencies', () => {
    expect(transitiveNames(marketingMem18Module)).toEqual([
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
      '@ci/identity-flaky-15',
      '@ci/inventory',
      '@ci/logger',
      '@ci/marketing-01',
      '@ci/marketing-03',
      '@ci/marketing-10',
      '@ci/marketing-11',
      '@ci/marketing-13',
      '@ci/marketing-17',
      '@ci/marketing-cpu-14',
      '@ci/marketing-flaky-05',
      '@ci/marketing-flaky-15',
      '@ci/marketing-mem-09',
      '@ci/marketing-slow-08',
      '@ci/marketing-slow-12',
      '@ci/marketing-slow-16',
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
