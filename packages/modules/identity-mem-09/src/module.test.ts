import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { identityMem09Module } from './module.js';

describe('@ci/identity-mem-09', () => {
  it('declares its direct dependencies', () => {
    expect(identityMem09Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/inventory',
      '@ci/storage',
      '@ci/fulfillment-cpu-07',
    ]);
  });

  it('sits at depth 17 of the graph', () => {
    expect(depthOf(identityMem09Module)).toBe(17);
  });

  it('reaches all 34 transitive dependencies', () => {
    expect(transitiveNames(identityMem09Module)).toEqual([
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
