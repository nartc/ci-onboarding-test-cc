import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { checkoutSlow08Module } from './module.js';

describe('@ci/checkout-slow-08', () => {
  it('declares its direct dependencies', () => {
    expect(checkoutSlow08Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/billing',
      '@ci/recommendations',
      '@ci/checkout-cpu-07',
    ]);
  });

  it('sits at depth 14 of the graph', () => {
    expect(depthOf(checkoutSlow08Module)).toBe(14);
  });

  it('reaches all 30 transitive dependencies', () => {
    expect(transitiveNames(checkoutSlow08Module)).toEqual([
      '@ci/analytics',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/checkout-02',
      '@ci/checkout-cpu-07',
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
