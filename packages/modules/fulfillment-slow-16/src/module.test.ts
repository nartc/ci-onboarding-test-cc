import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { fulfillmentSlow16Module } from './module.js';

describe('@ci/fulfillment-slow-16', () => {
  it('declares its direct dependencies', () => {
    expect(fulfillmentSlow16Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/schema',
      '@ci/search',
      '@ci/fulfillment-flaky-15',
    ]);
  });

  it('sits at depth 21 of the graph', () => {
    expect(depthOf(fulfillmentSlow16Module)).toBe(21);
  });

  it('reaches all 46 transitive dependencies', () => {
    expect(transitiveNames(fulfillmentSlow16Module)).toEqual([
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
