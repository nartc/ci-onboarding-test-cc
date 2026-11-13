import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { financeSlow08Module } from './module.js';

describe('@ci/finance-slow-08', () => {
  it('declares its direct dependencies', () => {
    expect(financeSlow08Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/metrics',
      '@ci/schema',
    ]);
  });

  it('sits at depth 8 of the graph', () => {
    expect(depthOf(financeSlow08Module)).toBe(8);
  });

  it('reaches all 12 transitive dependencies', () => {
    expect(transitiveNames(financeSlow08Module)).toEqual([
      '@ci/constants',
      '@ci/date',
      '@ci/errors',
      '@ci/events',
      '@ci/logger',
      '@ci/metrics',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
