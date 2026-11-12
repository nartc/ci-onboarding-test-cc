import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { identitySlow12Module } from './module.js';

describe('@ci/identity-slow-12', () => {
  it('declares its direct dependencies', () => {
    expect(identitySlow12Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/feature-flags',
      '@ci/events',
      '@ci/payments',
      '@ci/identity-cpu-07',
    ]);
  });

  it('sits at depth 19 of the graph', () => {
    expect(depthOf(identitySlow12Module)).toBe(19);
  });

  it('reaches all 42 transitive dependencies', () => {
    expect(transitiveNames(identitySlow12Module)).toEqual([
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
      '@ci/finance-01',
      '@ci/fulfillment-slow-12',
      '@ci/http',
      '@ci/i18n',
      '@ci/identity-01',
      '@ci/identity-03',
      '@ci/identity-06',
      '@ci/identity-cpu-07',
      '@ci/identity-flaky-05',
      '@ci/inventory',
      '@ci/logger',
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
