import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { marketingCpu07Module } from './module.js';

describe('@ci/marketing-cpu-07', () => {
  it('declares its direct dependencies', () => {
    expect(marketingCpu07Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/billing',
      '@ci/marketing-06',
      '@ci/identity-11',
    ]);
  });

  it('sits at depth 15 of the graph', () => {
    expect(depthOf(marketingCpu07Module)).toBe(15);
  });

  it('reaches all 33 transitive dependencies', () => {
    expect(transitiveNames(marketingCpu07Module)).toEqual([
      '@ci/analytics',
      '@ci/audit',
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
      '@ci/identity-10',
      '@ci/identity-11',
      '@ci/inventory',
      '@ci/logger',
      '@ci/marketing-06',
      '@ci/metrics',
      '@ci/orders',
      '@ci/queue',
      '@ci/recommendations',
      '@ci/result',
      '@ci/schema',
      '@ci/search',
      '@ci/serializer',
      '@ci/storage',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
