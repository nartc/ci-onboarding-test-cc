import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { httpModule } from './module.js';

describe('@ci/http', () => {
  it('declares its direct dependencies', () => {
    expect(httpModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/logger',
      '@ci/config',
      '@ci/serializer',
      '@ci/errors',
    ]);
  });

  it('sits at depth 6 of the graph', () => {
    expect(depthOf(httpModule)).toBe(6);
  });

  it('reaches all 9 transitive dependencies', () => {
    expect(transitiveNames(httpModule)).toEqual([
      '@ci/config',
      '@ci/constants',
      '@ci/errors',
      '@ci/logger',
      '@ci/result',
      '@ci/serializer',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
