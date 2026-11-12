import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { dateModule } from './module.js';

describe('@ci/date', () => {
  it('declares its direct dependencies', () => {
    expect(dateModule.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/constants']);
  });

  it('sits at depth 2 of the graph', () => {
    expect(depthOf(dateModule)).toBe(2);
  });

  it('reaches all 3 transitive dependencies', () => {
    expect(transitiveNames(dateModule)).toEqual(['@ci/constants', '@ci/types', '@ci/utils']);
  });
});
