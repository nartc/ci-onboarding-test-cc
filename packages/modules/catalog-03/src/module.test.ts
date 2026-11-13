import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { catalog03Module } from './module.js';

describe('@ci/catalog-03', () => {
  it('declares its direct dependencies', () => {
    expect(catalog03Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/users',
      '@ci/payments',
      '@ci/feature-flags',
    ]);
  });

  it('sits at depth 12 of the graph', () => {
    expect(depthOf(catalog03Module)).toBe(12);
  });

  it('reaches all 22 transitive dependencies', () => {
    expect(transitiveNames(catalog03Module)).toEqual([
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
      '@ci/feature-flags',
      '@ci/http',
      '@ci/logger',
      '@ci/metrics',
      '@ci/payments',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
