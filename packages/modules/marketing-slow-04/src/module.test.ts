import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { marketingSlow04Module } from './module.js';

describe('@ci/marketing-slow-04', () => {
  it('declares its direct dependencies', () => {
    expect(marketingSlow04Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/recommendations',
      '@ci/schema',
      '@ci/users',
      '@ci/marketing-03',
    ]);
  });

  it('sits at depth 15 of the graph', () => {
    expect(depthOf(marketingSlow04Module)).toBe(15);
  });

  it('reaches all 29 transitive dependencies', () => {
    expect(transitiveNames(marketingSlow04Module)).toEqual([
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
      '@ci/marketing-03',
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
