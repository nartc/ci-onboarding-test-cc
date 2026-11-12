import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { uiLayoutModule } from './module.js';

describe('@ci/ui-layout', () => {
  it('declares its direct dependencies', () => {
    expect(uiLayoutModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/ui-primitives',
      '@ci/i18n',
    ]);
  });

  it('sits at depth 4 of the graph', () => {
    expect(depthOf(uiLayoutModule)).toBe(4);
  });

  it('reaches all 7 transitive dependencies', () => {
    expect(transitiveNames(uiLayoutModule)).toEqual([
      '@ci/constants',
      '@ci/date',
      '@ci/i18n',
      '@ci/types',
      '@ci/ui-primitives',
      '@ci/ui-tokens',
      '@ci/utils',
    ]);
  });
});
