import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { fulfillmentSlow20Module } from './module.js';

describe('@ci/fulfillment-slow-20', () => {
  it('declares its direct dependencies', () => {
    expect(fulfillmentSlow20Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/feature-flags',
      '@ci/fulfillment-06',
    ]);
  });

  it('sits at depth 16 of the graph', () => {
    expect(depthOf(fulfillmentSlow20Module)).toBe(16);
  });

  it('reaches all 32 transitive dependencies', () => {
    expect(transitiveNames(fulfillmentSlow20Module)).toEqual([
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
