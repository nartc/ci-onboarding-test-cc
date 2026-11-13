import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { fulfillmentSlow08Module } from './module.js';

describe('@ci/fulfillment-slow-08', () => {
  it('declares its direct dependencies', () => {
    expect(fulfillmentSlow08Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/tracing',
      '@ci/fulfillment-cpu-07',
    ]);
  });

  it('sits at depth 17 of the graph', () => {
    expect(depthOf(fulfillmentSlow08Module)).toBe(17);
  });

  it('reaches all 34 transitive dependencies', () => {
    expect(transitiveNames(fulfillmentSlow08Module)).toEqual([
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
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/queue',
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
