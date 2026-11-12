import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { catalogSlow08Module } from './module.js';

describe('@ci/catalog-slow-08', () => {
  it('declares its direct dependencies', () => {
    expect(catalogSlow08Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/queue',
      '@ci/catalog-cpu-07',
    ]);
  });

  it('sits at depth 14 of the graph', () => {
    expect(depthOf(catalogSlow08Module)).toBe(14);
  });

  it('reaches all 29 transitive dependencies', () => {
    expect(transitiveNames(catalogSlow08Module)).toEqual([
      '@ci/analytics',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/catalog-01',
      '@ci/catalog-cpu-07',
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
      '@ci/payments',
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
