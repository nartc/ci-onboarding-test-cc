import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { marketingSlow08Module } from './module.js';

describe('@ci/marketing-slow-08', () => {
  it('declares its direct dependencies', () => {
    expect(marketingSlow08Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/auth',
      '@ci/analytics',
    ]);
  });

  it('sits at depth 13 of the graph', () => {
    expect(depthOf(marketingSlow08Module)).toBe(13);
  });

  it('reaches all 25 transitive dependencies', () => {
    expect(transitiveNames(marketingSlow08Module)).toEqual([
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
      '@ci/http',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
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
