import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { warehouse01Module } from './module.js';

describe('@ci/warehouse-01', () => {
  it('declares its direct dependencies', () => {
    expect(warehouse01Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/billing',
      '@ci/http',
    ]);
  });

  it('sits at depth 11 of the graph', () => {
    expect(depthOf(warehouse01Module)).toBe(11);
  });

  it('reaches all 19 transitive dependencies', () => {
    expect(transitiveNames(warehouse01Module)).toEqual([
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
      '@ci/logger',
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
