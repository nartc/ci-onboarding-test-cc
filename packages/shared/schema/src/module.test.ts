import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { schemaModule } from './module.js';

describe('@ci/schema', () => {
  it('declares its direct dependencies', () => {
    expect(schemaModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/validation',
      '@ci/serializer',
    ]);
  });

  it('sits at depth 6 of the graph', () => {
    expect(depthOf(schemaModule)).toBe(6);
  });

  it('reaches all 7 transitive dependencies', () => {
    expect(transitiveNames(schemaModule)).toEqual([
      '@ci/constants',
      '@ci/errors',
      '@ci/result',
      '@ci/serializer',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
