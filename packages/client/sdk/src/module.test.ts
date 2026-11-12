import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { sdkModule } from './module.js';

describe('@ci/sdk', () => {
  it('declares its direct dependencies', () => {
    expect(sdkModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/http',
      '@ci/auth',
      '@ci/schema',
      '@ci/result',
    ]);
  });

  it('sits at depth 9 of the graph', () => {
    expect(depthOf(sdkModule)).toBe(9);
  });

  it('reaches all 15 transitive dependencies', () => {
    expect(transitiveNames(sdkModule)).toEqual([
      '@ci/auth',
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
