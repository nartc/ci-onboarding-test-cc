import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { uiPrimitivesModule } from './module.js';

describe('@ci/ui-primitives', () => {
  it('declares its direct dependencies', () => {
    expect(uiPrimitivesModule.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/ui-tokens']);
  });

  it('sits at depth 3 of the graph', () => {
    expect(depthOf(uiPrimitivesModule)).toBe(3);
  });

  it('reaches all 4 transitive dependencies', () => {
    expect(transitiveNames(uiPrimitivesModule)).toEqual([
      '@ci/constants',
      '@ci/types',
      '@ci/ui-tokens',
      '@ci/utils',
    ]);
  });
});
