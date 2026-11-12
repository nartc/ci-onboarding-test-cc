import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { configModule } from './module.js';

describe('@ci/config', () => {
  it('declares its direct dependencies', () => {
    expect(configModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/validation',
      '@ci/constants',
      '@ci/logger',
    ]);
  });

  it('sits at depth 5 of the graph', () => {
    expect(depthOf(configModule)).toBe(5);
  });

  it('reaches all 7 transitive dependencies', () => {
    expect(transitiveNames(configModule)).toEqual([
      '@ci/constants',
      '@ci/errors',
      '@ci/logger',
      '@ci/result',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
