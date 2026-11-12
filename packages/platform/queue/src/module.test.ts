import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { queueModule } from './module.js';

describe('@ci/queue', () => {
  it('declares its direct dependencies', () => {
    expect(queueModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/events',
      '@ci/db',
      '@ci/serializer',
      '@ci/tracing',
    ]);
  });

  it('sits at depth 9 of the graph', () => {
    expect(depthOf(queueModule)).toBe(9);
  });

  it('reaches all 16 transitive dependencies', () => {
    expect(transitiveNames(queueModule)).toEqual([
      '@ci/config',
      '@ci/constants',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/http',
      '@ci/logger',
      '@ci/metrics',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/tracing',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
