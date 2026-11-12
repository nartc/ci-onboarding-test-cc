import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { fulfillment17Module } from './module.js';

describe('@ci/fulfillment-17', () => {
  it('declares its direct dependencies', () => {
    expect(fulfillment17Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/users',
      '@ci/fulfillment-slow-16',
    ]);
  });

  it('sits at depth 22 of the graph', () => {
    expect(depthOf(fulfillment17Module)).toBe(22);
  });

  it('reaches all 47 transitive dependencies', () => {
    expect(transitiveNames(fulfillment17Module)).toEqual([
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
      '@ci/fulfillment-flaky-15',
      '@ci/fulfillment-slow-04',
      '@ci/fulfillment-slow-08',
      '@ci/fulfillment-slow-12',
      '@ci/fulfillment-slow-16',
      '@ci/http',
      '@ci/i18n',
      '@ci/inventory',
      '@ci/logger',
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
