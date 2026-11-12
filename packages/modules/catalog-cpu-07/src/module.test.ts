import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { catalogCpu07Module } from './module.js';

describe('@ci/catalog-cpu-07', () => {
  it('declares its direct dependencies', () => {
    expect(catalogCpu07Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/analytics',
      '@ci/catalog-01',
    ]);
  });

  it('sits at depth 13 of the graph', () => {
    expect(depthOf(catalogCpu07Module)).toBe(13);
  });

  it('reaches all 28 transitive dependencies', () => {
    expect(transitiveNames(catalogCpu07Module)).toEqual([
      '@ci/analytics',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/catalog-01',
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
