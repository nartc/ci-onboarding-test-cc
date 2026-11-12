import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { uiChartsModule } from './module.js';

describe('@ci/ui-charts', () => {
  it('declares its direct dependencies', () => {
    expect(uiChartsModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/ui-components',
      '@ci/ui-layout',
    ]);
  });

  it('sits at depth 5 of the graph', () => {
    expect(depthOf(uiChartsModule)).toBe(5);
  });

  it('reaches all 9 transitive dependencies', () => {
    expect(transitiveNames(uiChartsModule)).toEqual([
      '@ci/constants',
      '@ci/date',
      '@ci/i18n',
      '@ci/types',
      '@ci/ui-components',
      '@ci/ui-layout',
      '@ci/ui-primitives',
      '@ci/ui-tokens',
      '@ci/utils',
    ]);
  });
});
