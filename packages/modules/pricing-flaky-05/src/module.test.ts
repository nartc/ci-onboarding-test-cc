import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { pricingFlaky05Module } from './module.js';

describe('@ci/pricing-flaky-05', () => {
  it('declares its direct dependencies', () => {
    expect(pricingFlaky05Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/users',
      '@ci/shipping',
      '@ci/reports',
      '@ci/pricing-slow-04',
    ]);
  });

  it('sits at depth 14 of the graph', () => {
    expect(depthOf(pricingFlaky05Module)).toBe(14);
  });

  it('reaches all 30 transitive dependencies', () => {
    expect(transitiveNames(pricingFlaky05Module)).toEqual([
      '@ci/analytics',
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
      '@ci/http',
      '@ci/i18n',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/pricing-slow-04',
      '@ci/queue',
      '@ci/reports',
      '@ci/result',
      '@ci/schema',
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
