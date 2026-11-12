import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { warehouse10Module } from './module.js';

describe('@ci/warehouse-10', () => {
  it('declares its direct dependencies', () => {
    expect(warehouse10Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/billing',
      '@ci/warehouse-06',
    ]);
  });

  it('sits at depth 11 of the graph', () => {
    expect(depthOf(warehouse10Module)).toBe(11);
  });

  it('reaches all 22 transitive dependencies', () => {
    expect(transitiveNames(warehouse10Module)).toEqual([
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
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
      '@ci/warehouse-06',
    ]);
  });
});
