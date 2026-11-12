import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { supportSlow16Module } from './module.js';

describe('@ci/support-slow-16', () => {
  it('declares its direct dependencies', () => {
    expect(supportSlow16Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/http',
      '@ci/support-flaky-15',
      '@ci/support-06',
    ]);
  });

  it('sits at depth 28 of the graph', () => {
    expect(depthOf(supportSlow16Module)).toBe(28);
  });

  it('reaches all 54 transitive dependencies', () => {
    expect(transitiveNames(supportSlow16Module)).toEqual([
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
      '@ci/support-01',
      '@ci/support-02',
      '@ci/support-06',
      '@ci/support-flaky-05',
      '@ci/support-flaky-15',
      '@ci/support-slow-04',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
