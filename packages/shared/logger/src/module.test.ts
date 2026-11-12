import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { loggerModule } from './module.js';

describe('@ci/logger', () => {
  it('declares its direct dependencies', () => {
    expect(loggerModule.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/constants']);
  });

  it('sits at depth 2 of the graph', () => {
    expect(depthOf(loggerModule)).toBe(2);
  });

  it('reaches all 3 transitive dependencies', () => {
    expect(transitiveNames(loggerModule)).toEqual(['@ci/constants', '@ci/types', '@ci/utils']);
  });
});
