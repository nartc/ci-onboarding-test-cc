import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { metricsModule } from './module.js';

describe('@ci/metrics', () => {
  it('declares its direct dependencies', () => {
    expect(metricsModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/events',
      '@ci/logger',
      '@ci/date',
    ]);
  });

  it('sits at depth 7 of the graph', () => {
    expect(depthOf(metricsModule)).toBe(7);
  });

  it('reaches all 10 transitive dependencies', () => {
    expect(transitiveNames(metricsModule)).toEqual([
      '@ci/constants',
      '@ci/date',
      '@ci/errors',
      '@ci/events',
      '@ci/logger',
      '@ci/result',
      '@ci/serializer',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
