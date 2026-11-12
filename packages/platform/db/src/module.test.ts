import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { dbModule } from './module.js';

describe('@ci/db', () => {
  it('declares its direct dependencies', () => {
    expect(dbModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/config',
      '@ci/logger',
      '@ci/errors',
      '@ci/validation',
      '@ci/schema',
    ]);
  });

  it('sits at depth 7 of the graph', () => {
    expect(depthOf(dbModule)).toBe(7);
  });

  it('reaches all 10 transitive dependencies', () => {
    expect(transitiveNames(dbModule)).toEqual([
      '@ci/config',
      '@ci/constants',
      '@ci/errors',
      '@ci/logger',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
