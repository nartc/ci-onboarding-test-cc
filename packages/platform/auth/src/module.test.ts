import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { authModule } from './module.js';

describe('@ci/auth', () => {
  it('declares its direct dependencies', () => {
    expect(authModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/crypto',
      '@ci/db',
      '@ci/cache',
      '@ci/http',
    ]);
  });

  it('sits at depth 8 of the graph', () => {
    expect(depthOf(authModule)).toBe(8);
  });

  it('reaches all 14 transitive dependencies', () => {
    expect(transitiveNames(authModule)).toEqual([
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/db',
      '@ci/errors',
      '@ci/http',
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
