import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { catalog19Module } from './module.js';

describe('@ci/catalog-19', () => {
  it('declares its direct dependencies', () => {
    expect(catalog19Module.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/metrics']);
  });

  it('sits at depth 8 of the graph', () => {
    expect(depthOf(catalog19Module)).toBe(8);
  });

  it('reaches all 11 transitive dependencies', () => {
    expect(transitiveNames(catalog19Module)).toEqual([
      '@ci/constants',
      '@ci/date',
      '@ci/errors',
      '@ci/events',
      '@ci/logger',
      '@ci/metrics',
      '@ci/result',
      '@ci/serializer',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
