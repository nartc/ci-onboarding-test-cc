import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { i18nModule } from './module.js';

describe('@ci/i18n', () => {
  it('declares its direct dependencies', () => {
    expect(i18nModule.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/constants', '@ci/date']);
  });

  it('sits at depth 3 of the graph', () => {
    expect(depthOf(i18nModule)).toBe(3);
  });

  it('reaches all 4 transitive dependencies', () => {
    expect(transitiveNames(i18nModule)).toEqual([
      '@ci/constants',
      '@ci/date',
      '@ci/types',
      '@ci/utils',
    ]);
  });
});
