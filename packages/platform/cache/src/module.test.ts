import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { cacheModule } from './module.js';

describe('@ci/cache', () => {
  it('declares its direct dependencies', () => {
    expect(cacheModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/logger',
      '@ci/serializer',
      '@ci/config',
    ]);
  });

  it('sits at depth 6 of the graph', () => {
    expect(depthOf(cacheModule)).toBe(6);
  });

  it('reaches all 9 transitive dependencies', () => {
    expect(transitiveNames(cacheModule)).toEqual([
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
