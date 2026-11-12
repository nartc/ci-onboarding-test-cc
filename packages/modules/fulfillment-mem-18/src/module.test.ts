import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { fulfillmentMem18Module } from './module.js';

describe('@ci/fulfillment-mem-18', () => {
  it('declares its direct dependencies', () => {
    expect(fulfillmentMem18Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/inventory',
      '@ci/fulfillment-17',
      '@ci/fulfillment-cpu-07',
    ]);
  });

  it('sits at depth 23 of the graph', () => {
    expect(depthOf(fulfillmentMem18Module)).toBe(23);
  });

  it('reaches all 48 transitive dependencies', () => {
    expect(transitiveNames(fulfillmentMem18Module)).toEqual([
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
      '@ci/fulfillment-17',
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
