import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { featureFlagsModule } from './module.js';

describe('@ci/feature-flags', () => {
  it('declares its direct dependencies', () => {
    expect(featureFlagsModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/config',
      '@ci/cache',
      '@ci/metrics',
    ]);
  });

  it('sits at depth 8 of the graph', () => {
    expect(depthOf(featureFlagsModule)).toBe(8);
  });

  it('reaches all 13 transitive dependencies', () => {
    expect(transitiveNames(featureFlagsModule)).toEqual([
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/date',
      '@ci/errors',
      '@ci/events',
      '@ci/logger',
      '@ci/metrics',
      '@ci/result',
      '@ci/serializer',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
