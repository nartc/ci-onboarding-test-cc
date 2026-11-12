import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { serializerModule } from './module.js';

describe('@ci/serializer', () => {
  it('declares its direct dependencies', () => {
    expect(serializerModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/validation',
      '@ci/result',
    ]);
  });

  it('sits at depth 5 of the graph', () => {
    expect(depthOf(serializerModule)).toBe(5);
  });

  it('reaches all 6 transitive dependencies', () => {
    expect(transitiveNames(serializerModule)).toEqual([
      '@ci/constants',
      '@ci/errors',
      '@ci/result',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
