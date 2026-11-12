import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { identity19Module } from './module.js';

describe('@ci/identity-19', () => {
  it('declares its direct dependencies', () => {
    expect(identity19Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/db',
      '@ci/identity-mem-18',
    ]);
  });

  it('sits at depth 21 of the graph', () => {
    expect(depthOf(identity19Module)).toBe(21);
  });

  it('reaches all 42 transitive dependencies', () => {
    expect(transitiveNames(identity19Module)).toEqual([
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
      '@ci/fulfillment-02',
      '@ci/fulfillment-03',
      '@ci/fulfillment-06',
      '@ci/fulfillment-cpu-07',
      '@ci/fulfillment-flaky-05',
      '@ci/fulfillment-slow-04',
      '@ci/http',
      '@ci/identity-03',
      '@ci/identity-17',
      '@ci/identity-mem-09',
      '@ci/identity-mem-18',
      '@ci/identity-slow-16',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/queue',
      '@ci/recommendations',
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
