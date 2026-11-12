import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { pricing03Module } from './module.js';

describe('@ci/pricing-03', () => {
  it('declares its direct dependencies', () => {
    expect(pricing03Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/users',
      '@ci/marketing-slow-16',
    ]);
  });

  it('sits at depth 22 of the graph', () => {
    expect(depthOf(pricing03Module)).toBe(22);
  });

  it('reaches all 46 transitive dependencies', () => {
    expect(transitiveNames(pricing03Module)).toEqual([
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
