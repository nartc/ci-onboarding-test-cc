import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { marketing03Module } from './module.js';

describe('@ci/marketing-03', () => {
  it('declares its direct dependencies', () => {
    expect(marketing03Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/recommendations',
      '@ci/analytics',
    ]);
  });

  it('sits at depth 14 of the graph', () => {
    expect(depthOf(marketing03Module)).toBe(14);
  });

  it('reaches all 28 transitive dependencies', () => {
    expect(transitiveNames(marketing03Module)).toEqual([
      '@ci/analytics',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/feature-flags',
      '@ci/http',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/queue',
      '@ci/recommendations',
      '@ci/result',
      '@ci/schema',
      '@ci/search',
      '@ci/serializer',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
