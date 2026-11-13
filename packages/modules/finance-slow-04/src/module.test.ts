import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { financeSlow04Module } from './module.js';

describe('@ci/finance-slow-04', () => {
  it('declares its direct dependencies', () => {
    expect(financeSlow04Module.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/db']);
  });

  it('sits at depth 8 of the graph', () => {
    expect(depthOf(financeSlow04Module)).toBe(8);
  });

  it('reaches all 11 transitive dependencies', () => {
    expect(transitiveNames(financeSlow04Module)).toEqual([
      '@ci/config',
      '@ci/constants',
      '@ci/db',
      '@ci/errors',
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
