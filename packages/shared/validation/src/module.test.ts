import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { validationModule } from './module.js';

describe('@ci/validation', () => {
  it('declares its direct dependencies', () => {
    expect(validationModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/result',
      '@ci/errors',
    ]);
  });

  it('sits at depth 4 of the graph', () => {
    expect(depthOf(validationModule)).toBe(4);
  });

  it('reaches all 5 transitive dependencies', () => {
    expect(transitiveNames(validationModule)).toEqual([
      '@ci/constants',
      '@ci/errors',
      '@ci/result',
      '@ci/types',
      '@ci/utils',
    ]);
  });
});
