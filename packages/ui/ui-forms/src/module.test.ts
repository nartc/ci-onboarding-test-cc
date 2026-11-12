import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { uiFormsModule } from './module.js';

describe('@ci/ui-forms', () => {
  it('declares its direct dependencies', () => {
    expect(uiFormsModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/ui-components',
      '@ci/validation',
      '@ci/schema',
    ]);
  });

  it('sits at depth 7 of the graph', () => {
    expect(depthOf(uiFormsModule)).toBe(7);
  });

  it('reaches all 13 transitive dependencies', () => {
    expect(transitiveNames(uiFormsModule)).toEqual([
      '@ci/constants',
      '@ci/date',
      '@ci/errors',
      '@ci/i18n',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/types',
      '@ci/ui-components',
      '@ci/ui-primitives',
      '@ci/ui-tokens',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
