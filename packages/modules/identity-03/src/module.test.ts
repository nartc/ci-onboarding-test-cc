import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { identity03Module } from './module.js';

describe('@ci/identity-03', () => {
  it('declares its direct dependencies', () => {
    expect(identity03Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/users',
      '@ci/feature-flags',
      '@ci/metrics',
    ]);
  });

  it('sits at depth 10 of the graph', () => {
    expect(depthOf(identity03Module)).toBe(10);
  });

  it('reaches all 20 transitive dependencies', () => {
    expect(transitiveNames(identity03Module)).toEqual([
      '@ci/auth',
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
    ]);
  });
});
