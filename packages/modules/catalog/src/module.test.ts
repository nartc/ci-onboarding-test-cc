import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { catalogModule } from './module.js';

describe('@ci/catalog', () => {
  it('declares its direct dependencies', () => {
    expect(catalogModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/catalog-01',
      '@ci/catalog-02',
      '@ci/catalog-03',
      '@ci/catalog-slow-04',
      '@ci/catalog-flaky-05',
      '@ci/catalog-06',
      '@ci/catalog-cpu-07',
      '@ci/catalog-slow-08',
      '@ci/catalog-mem-09',
      '@ci/catalog-10',
      '@ci/catalog-11',
      '@ci/catalog-slow-12',
      '@ci/catalog-13',
      '@ci/catalog-cpu-14',
      '@ci/catalog-flaky-15',
      '@ci/catalog-slow-16',
      '@ci/catalog-17',
      '@ci/catalog-mem-18',
      '@ci/catalog-19',
      '@ci/catalog-slow-20',
    ]);
  });

  it('sits at depth 21 of the graph', () => {
    expect(depthOf(catalogModule)).toBe(21);
  });

  it('reaches all 54 transitive dependencies', () => {
    expect(transitiveNames(catalogModule)).toEqual([
      '@ci/analytics',
      '@ci/audit',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/catalog-01',
      '@ci/catalog-02',
      '@ci/catalog-03',
      '@ci/catalog-06',
      '@ci/catalog-10',
      '@ci/catalog-11',
      '@ci/catalog-13',
      '@ci/catalog-17',
      '@ci/catalog-19',
      '@ci/catalog-cpu-07',
      '@ci/catalog-cpu-14',
      '@ci/catalog-flaky-05',
      '@ci/catalog-flaky-15',
      '@ci/catalog-mem-09',
      '@ci/catalog-mem-18',
      '@ci/catalog-slow-04',
      '@ci/catalog-slow-08',
      '@ci/catalog-slow-12',
      '@ci/catalog-slow-16',
      '@ci/catalog-slow-20',
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
      '@ci/reports',
      '@ci/result',
      '@ci/schema',
      '@ci/search',
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
