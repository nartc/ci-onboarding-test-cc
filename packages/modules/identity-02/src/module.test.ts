import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { identity02Module } from './module.js';

describe('@ci/identity-02', () => {
  it('declares its direct dependencies', () => {
    expect(identity02Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/audit',
      '@ci/payments',
      '@ci/recommendations',
      '@ci/fulfillment-cpu-14',
    ]);
  });

  it('sits at depth 20 of the graph', () => {
    expect(depthOf(identity02Module)).toBe(20);
  });

  it('reaches all 45 transitive dependencies', () => {
    expect(transitiveNames(identity02Module)).toEqual([
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
      '@ci/fulfillment-02',
      '@ci/fulfillment-03',
      '@ci/fulfillment-06',
      '@ci/fulfillment-13',
      '@ci/fulfillment-cpu-07',
      '@ci/fulfillment-cpu-14',
      '@ci/fulfillment-flaky-05',
      '@ci/fulfillment-slow-04',
      '@ci/fulfillment-slow-08',
      '@ci/fulfillment-slow-12',
      '@ci/http',
      '@ci/i18n',
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
      '@ci/storage',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
