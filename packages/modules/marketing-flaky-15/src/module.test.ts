import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { marketingFlaky15Module } from './module.js';

describe('@ci/marketing-flaky-15', () => {
  it('declares its direct dependencies', () => {
    expect(marketingFlaky15Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/analytics',
      '@ci/i18n',
      '@ci/db',
      '@ci/marketing-cpu-14',
    ]);
  });

  it('sits at depth 20 of the graph', () => {
    expect(depthOf(marketingFlaky15Module)).toBe(20);
  });

  it('reaches all 44 transitive dependencies', () => {
    expect(transitiveNames(marketingFlaky15Module)).toEqual([
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
      '@ci/marketing-mem-09',
      '@ci/marketing-slow-08',
      '@ci/marketing-slow-12',
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
