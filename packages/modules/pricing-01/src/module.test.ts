import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { pricing01Module } from './module.js';

describe('@ci/pricing-01', () => {
  it('declares its direct dependencies', () => {
    expect(pricing01Module.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/auth']);
  });

  it('sits at depth 9 of the graph', () => {
    expect(depthOf(pricing01Module)).toBe(9);
  });

  it('reaches all 15 transitive dependencies', () => {
    expect(transitiveNames(pricing01Module)).toEqual([
      '@ci/auth',
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/db',
      '@ci/errors',
      '@ci/http',
      '@ci/logger',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
