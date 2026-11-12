import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { checkout10Module } from './module.js';

describe('@ci/checkout-10', () => {
  it('declares its direct dependencies', () => {
    expect(checkout10Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/users',
      '@ci/shipping',
      '@ci/tracing',
      '@ci/checkout-03',
      '@ci/catalog-slow-04',
    ]);
  });

  it('sits at depth 15 of the graph', () => {
    expect(depthOf(checkout10Module)).toBe(15);
  });

  it('reaches all 35 transitive dependencies', () => {
    expect(transitiveNames(checkout10Module)).toEqual([
      '@ci/analytics',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/catalog-01',
      '@ci/catalog-03',
      '@ci/catalog-slow-04',
      '@ci/checkout-03',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/feature-flags',
      '@ci/http',
      '@ci/i18n',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/payments',
      '@ci/queue',
      '@ci/recommendations',
      '@ci/result',
      '@ci/schema',
      '@ci/search',
      '@ci/serializer',
      '@ci/shipping',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
