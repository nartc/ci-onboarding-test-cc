import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { fulfillmentFlaky05Module } from './module.js';

describe('@ci/fulfillment-flaky-05', () => {
  it('declares its direct dependencies', () => {
    expect(fulfillmentFlaky05Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/orders',
      '@ci/fulfillment-slow-04',
      '@ci/fulfillment-02',
    ]);
  });

  it('sits at depth 14 of the graph', () => {
    expect(depthOf(fulfillmentFlaky05Module)).toBe(14);
  });

  it('reaches all 29 transitive dependencies', () => {
    expect(transitiveNames(fulfillmentFlaky05Module)).toEqual([
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
      '@ci/fulfillment-slow-04',
      '@ci/http',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/queue',
      '@ci/result',
      '@ci/schema',
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
