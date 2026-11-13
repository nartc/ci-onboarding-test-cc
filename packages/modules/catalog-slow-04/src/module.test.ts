import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { catalogSlow04Module } from './module.js';

describe('@ci/catalog-slow-04', () => {
  it('declares its direct dependencies', () => {
    expect(catalogSlow04Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/i18n',
      '@ci/recommendations',
      '@ci/catalog-03',
      '@ci/catalog-01',
    ]);
  });

  it('sits at depth 14 of the graph', () => {
    expect(depthOf(catalogSlow04Module)).toBe(14);
  });

  it('reaches all 32 transitive dependencies', () => {
    expect(transitiveNames(catalogSlow04Module)).toEqual([
      '@ci/analytics',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/catalog-01',
      '@ci/catalog-03',
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
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
