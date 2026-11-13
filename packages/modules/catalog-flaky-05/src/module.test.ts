import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { catalogFlaky05Module } from './module.js';

describe('@ci/catalog-flaky-05', () => {
  it('declares its direct dependencies', () => {
    expect(catalogFlaky05Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/shipping',
      '@ci/catalog-02',
    ]);
  });

  it('sits at depth 13 of the graph', () => {
    expect(depthOf(catalogFlaky05Module)).toBe(13);
  });

  it('reaches all 26 transitive dependencies', () => {
    expect(transitiveNames(catalogFlaky05Module)).toEqual([
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/catalog-02',
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
