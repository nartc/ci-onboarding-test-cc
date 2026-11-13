import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { fulfillment03Module } from './module.js';

describe('@ci/fulfillment-03', () => {
  it('declares its direct dependencies', () => {
    expect(fulfillment03Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/orders',
      '@ci/fulfillment-02',
    ]);
  });

  it('sits at depth 12 of the graph', () => {
    expect(depthOf(fulfillment03Module)).toBe(12);
  });

  it('reaches all 25 transitive dependencies', () => {
    expect(transitiveNames(fulfillment03Module)).toEqual([
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
      '@ci/fulfillment-02',
      '@ci/http',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/queue',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
