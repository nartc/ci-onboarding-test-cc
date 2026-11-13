import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { pricingSlow04Module } from './module.js';

describe('@ci/pricing-slow-04', () => {
  it('declares its direct dependencies', () => {
    expect(pricingSlow04Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/shipping',
      '@ci/users',
      '@ci/analytics',
    ]);
  });

  it('sits at depth 13 of the graph', () => {
    expect(depthOf(pricingSlow04Module)).toBe(13);
  });

  it('reaches all 26 transitive dependencies', () => {
    expect(transitiveNames(pricingSlow04Module)).toEqual([
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
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/queue',
      '@ci/result',
      '@ci/schema',
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
