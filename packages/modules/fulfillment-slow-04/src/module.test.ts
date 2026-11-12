import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { fulfillmentSlow04Module } from './module.js';

describe('@ci/fulfillment-slow-04', () => {
  it('declares its direct dependencies', () => {
    expect(fulfillmentSlow04Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/storage',
      '@ci/feature-flags',
      '@ci/db',
      '@ci/fulfillment-03',
      '@ci/fulfillment-02',
    ]);
  });

  it('sits at depth 13 of the graph', () => {
    expect(depthOf(fulfillmentSlow04Module)).toBe(13);
  });

  it('reaches all 28 transitive dependencies', () => {
    expect(transitiveNames(fulfillmentSlow04Module)).toEqual([
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
