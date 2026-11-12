import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { fulfillment06Module } from './module.js';

describe('@ci/fulfillment-06', () => {
  it('declares its direct dependencies', () => {
    expect(fulfillment06Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/search',
      '@ci/fulfillment-flaky-05',
    ]);
  });

  it('sits at depth 15 of the graph', () => {
    expect(depthOf(fulfillment06Module)).toBe(15);
  });

  it('reaches all 31 transitive dependencies', () => {
    expect(transitiveNames(fulfillment06Module)).toEqual([
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
