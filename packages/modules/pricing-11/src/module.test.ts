import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { pricing11Module } from './module.js';

describe('@ci/pricing-11', () => {
  it('declares its direct dependencies', () => {
    expect(pricing11Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/recommendations',
      '@ci/pricing-10',
      '@ci/pricing-06',
    ]);
  });

  it('sits at depth 25 of the graph', () => {
    expect(depthOf(pricing11Module)).toBe(25);
  });

  it('reaches all 52 transitive dependencies', () => {
    expect(transitiveNames(pricing11Module)).toEqual([
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
      '@ci/marketing-06',
      '@ci/marketing-10',
      '@ci/marketing-11',
      '@ci/marketing-13',
      '@ci/marketing-cpu-14',
      '@ci/marketing-mem-09',
      '@ci/marketing-slow-08',
      '@ci/marketing-slow-12',
      '@ci/metrics',
      '@ci/notifications',
      '@ci/orders',
      '@ci/payments',
      '@ci/pricing-01',
      '@ci/pricing-06',
      '@ci/pricing-10',
      '@ci/pricing-cpu-07',
      '@ci/pricing-mem-09',
      '@ci/pricing-slow-08',
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
