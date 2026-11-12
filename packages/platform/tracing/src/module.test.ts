import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { tracingModule } from './module.js';

describe('@ci/tracing', () => {
  it('declares its direct dependencies', () => {
    expect(tracingModule.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/metrics', '@ci/http']);
  });

  it('sits at depth 8 of the graph', () => {
    expect(depthOf(tracingModule)).toBe(8);
  });

  it('reaches all 13 transitive dependencies', () => {
    expect(transitiveNames(tracingModule)).toEqual([
      '@ci/config',
      '@ci/constants',
      '@ci/date',
      '@ci/errors',
      '@ci/events',
      '@ci/http',
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
