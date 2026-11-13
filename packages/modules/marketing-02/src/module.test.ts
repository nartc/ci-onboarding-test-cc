import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { marketing02Module } from './module.js';

describe('@ci/marketing-02', () => {
  it('declares its direct dependencies', () => {
    expect(marketing02Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/queue',
      '@ci/users',
      '@ci/auth',
    ]);
  });

  it('sits at depth 10 of the graph', () => {
    expect(depthOf(marketing02Module)).toBe(10);
  });

  it('reaches all 21 transitive dependencies', () => {
    expect(transitiveNames(marketing02Module)).toEqual([
      '@ci/auth',
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/http',
      '@ci/logger',
      '@ci/metrics',
      '@ci/queue',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
