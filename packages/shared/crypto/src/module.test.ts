import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { cryptoModule } from './module.js';

describe('@ci/crypto', () => {
  it('declares its direct dependencies', () => {
    expect(cryptoModule.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/errors']);
  });

  it('sits at depth 3 of the graph', () => {
    expect(depthOf(cryptoModule)).toBe(3);
  });

  it('reaches all 4 transitive dependencies', () => {
    expect(transitiveNames(cryptoModule)).toEqual([
      '@ci/constants',
      '@ci/errors',
      '@ci/types',
      '@ci/utils',
    ]);
  });
});
