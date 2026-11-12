import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { storageModule } from './module.js';

describe('@ci/storage', () => {
  it('declares its direct dependencies', () => {
    expect(storageModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/db',
      '@ci/cache',
      '@ci/crypto',
    ]);
  });

  it('sits at depth 8 of the graph', () => {
    expect(depthOf(storageModule)).toBe(8);
  });

  it('reaches all 13 transitive dependencies', () => {
    expect(transitiveNames(storageModule)).toEqual([
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
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
