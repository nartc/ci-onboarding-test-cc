import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { uiComponentsModule } from './module.js';

describe('@ci/ui-components', () => {
  it('declares its direct dependencies', () => {
    expect(uiComponentsModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/ui-primitives',
      '@ci/i18n',
      '@ci/date',
    ]);
  });

  it('sits at depth 4 of the graph', () => {
    expect(depthOf(uiComponentsModule)).toBe(4);
  });

  it('reaches all 7 transitive dependencies', () => {
    expect(transitiveNames(uiComponentsModule)).toEqual([
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
