import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { identityCpu14Module } from './module.js';

describe('@ci/identity-cpu-14', () => {
  it('declares its direct dependencies', () => {
    expect(identityCpu14Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/feature-flags',
      '@ci/billing',
      '@ci/reports',
      '@ci/identity-13',
      '@ci/identity-mem-09',
    ]);
  });

  it('sits at depth 18 of the graph', () => {
    expect(depthOf(identityCpu14Module)).toBe(18);
  });

  it('reaches all 41 transitive dependencies', () => {
    expect(transitiveNames(identityCpu14Module)).toEqual([
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
      '@ci/fulfillment-02',
      '@ci/fulfillment-03',
      '@ci/fulfillment-06',
      '@ci/fulfillment-cpu-07',
      '@ci/fulfillment-flaky-05',
      '@ci/fulfillment-slow-04',
      '@ci/http',
      '@ci/i18n',
      '@ci/identity-03',
      '@ci/identity-13',
      '@ci/identity-mem-09',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/payments',
      '@ci/queue',
      '@ci/reports',
      '@ci/result',
      '@ci/schema',
      '@ci/search',
      '@ci/serializer',
      '@ci/storage',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
