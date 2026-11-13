import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { checkout13Module } from './module.js';

describe('@ci/checkout-13', () => {
  it('declares its direct dependencies', () => {
    expect(checkout13Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/date',
      '@ci/recommendations',
      '@ci/checkout-slow-08',
    ]);
  });

  it('sits at depth 15 of the graph', () => {
    expect(depthOf(checkout13Module)).toBe(15);
  });

  it('reaches all 31 transitive dependencies', () => {
    expect(transitiveNames(checkout13Module)).toEqual([
      '@ci/analytics',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/checkout-02',
      '@ci/checkout-cpu-07',
      '@ci/checkout-slow-08',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/feature-flags',
      '@ci/http',
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
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
