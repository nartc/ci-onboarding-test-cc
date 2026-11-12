import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { sdkMocksModule } from './module.js';

describe('@ci/sdk-mocks', () => {
  it('declares its direct dependencies', () => {
    expect(sdkMocksModule.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/sdk', '@ci/schema']);
  });

  it('sits at depth 10 of the graph', () => {
    expect(depthOf(sdkMocksModule)).toBe(10);
  });

  it('reaches all 16 transitive dependencies', () => {
    expect(transitiveNames(sdkMocksModule)).toEqual([
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
      '@ci/sdk',
      '@ci/serializer',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
