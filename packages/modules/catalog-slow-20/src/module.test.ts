import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { catalogSlow20Module } from './module.js';

describe('@ci/catalog-slow-20', () => {
  it('declares its direct dependencies', () => {
    expect(catalogSlow20Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/recommendations',
      '@ci/catalog-17',
    ]);
  });

  it('sits at depth 17 of the graph', () => {
    expect(depthOf(catalogSlow20Module)).toBe(17);
  });

  it('reaches all 39 transitive dependencies', () => {
    expect(transitiveNames(catalogSlow20Module)).toEqual([
      '@ci/analytics',
      '@ci/audit',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/catalog-01',
      '@ci/catalog-03',
      '@ci/catalog-17',
      '@ci/catalog-cpu-07',
      '@ci/catalog-mem-09',
      '@ci/catalog-slow-04',
      '@ci/catalog-slow-08',
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
      '@ci/storage',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
