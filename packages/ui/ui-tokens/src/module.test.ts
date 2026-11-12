import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { uiTokensModule } from './module.js';

describe('@ci/ui-tokens', () => {
  it('declares its direct dependencies', () => {
    expect(uiTokensModule.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/constants']);
  });

  it('sits at depth 2 of the graph', () => {
    expect(depthOf(uiTokensModule)).toBe(2);
  });

  it('reaches all 3 transitive dependencies', () => {
    expect(transitiveNames(uiTokensModule)).toEqual(['@ci/constants', '@ci/types', '@ci/utils']);
  });
});
