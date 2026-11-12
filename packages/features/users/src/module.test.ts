import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { usersModule } from './module.js';

describe('@ci/users', () => {
  it('declares its direct dependencies', () => {
    expect(usersModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/auth',
      '@ci/db',
      '@ci/validation',
      '@ci/events',
      '@ci/schema',
    ]);
  });

  it('sits at depth 9 of the graph', () => {
    expect(depthOf(usersModule)).toBe(9);
  });

  it('reaches all 16 transitive dependencies', () => {
    expect(transitiveNames(usersModule)).toEqual([
      '@ci/auth',
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
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
