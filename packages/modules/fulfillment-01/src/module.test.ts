import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { fulfillment01Module } from './module.js';

describe('@ci/fulfillment-01', () => {
  it('declares its direct dependencies', () => {
    expect(fulfillment01Module.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/users']);
  });

  it('sits at depth 10 of the graph', () => {
    expect(depthOf(fulfillment01Module)).toBe(10);
  });

  it('reaches all 17 transitive dependencies', () => {
    expect(transitiveNames(fulfillment01Module)).toEqual([
      '@ci/auth',
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
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
