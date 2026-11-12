import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { checkout11Module } from './module.js';

describe('@ci/checkout-11', () => {
  it('declares its direct dependencies', () => {
    expect(checkout11Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/queue',
      '@ci/notifications',
      '@ci/tracing',
      '@ci/checkout-10',
      '@ci/checkout-slow-04',
    ]);
  });

  it('sits at depth 16 of the graph', () => {
    expect(depthOf(checkout11Module)).toBe(16);
  });

  it('reaches all 39 transitive dependencies', () => {
    expect(transitiveNames(checkout11Module)).toEqual([
      '@ci/analytics',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/catalog-01',
      '@ci/catalog-03',
      '@ci/catalog-slow-04',
      '@ci/checkout-02',
      '@ci/checkout-03',
      '@ci/checkout-10',
      '@ci/checkout-slow-04',
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
      '@ci/notifications',
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
