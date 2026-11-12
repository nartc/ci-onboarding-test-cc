import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { errorsModule } from './module.js';

describe('@ci/errors', () => {
  it('declares its direct dependencies', () => {
    expect(errorsModule.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/constants']);
  });

  it('sits at depth 2 of the graph', () => {
    expect(depthOf(errorsModule)).toBe(2);
  });

  it('reaches all 3 transitive dependencies', () => {
    expect(transitiveNames(errorsModule)).toEqual(['@ci/constants', '@ci/types', '@ci/utils']);
  });
});
