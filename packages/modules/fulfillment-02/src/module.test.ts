import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { fulfillment02Module } from './module.js';

describe('@ci/fulfillment-02', () => {
  it('declares its direct dependencies', () => {
    expect(fulfillment02Module.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/cache']);
  });

  it('sits at depth 7 of the graph', () => {
    expect(depthOf(fulfillment02Module)).toBe(7);
  });

  it('reaches all 10 transitive dependencies', () => {
    expect(transitiveNames(fulfillment02Module)).toEqual([
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/errors',
      '@ci/logger',
      '@ci/result',
      '@ci/serializer',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
