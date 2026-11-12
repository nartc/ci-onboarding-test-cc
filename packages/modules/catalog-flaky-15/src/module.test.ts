import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { catalogFlaky15Module } from './module.js';

describe('@ci/catalog-flaky-15', () => {
  it('declares its direct dependencies', () => {
    expect(catalogFlaky15Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/audit',
      '@ci/payments',
      '@ci/metrics',
      '@ci/catalog-mem-09',
    ]);
  });

  it('sits at depth 16 of the graph', () => {
    expect(depthOf(catalogFlaky15Module)).toBe(16);
  });

  it('reaches all 38 transitive dependencies', () => {
    expect(transitiveNames(catalogFlaky15Module)).toEqual([
      '@ci/analytics',
      '@ci/audit',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/catalog-01',
      '@ci/catalog-03',
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
