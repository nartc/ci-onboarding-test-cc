import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { resultModule } from './module.js';

describe('@ci/result', () => {
  it('declares its direct dependencies', () => {
    expect(resultModule.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/errors']);
  });

  it('sits at depth 3 of the graph', () => {
    expect(depthOf(resultModule)).toBe(3);
  });

  it('reaches all 4 transitive dependencies', () => {
    expect(transitiveNames(resultModule)).toEqual([
      '@ci/constants',
      '@ci/errors',
      '@ci/types',
      '@ci/utils',
    ]);
  });
});
