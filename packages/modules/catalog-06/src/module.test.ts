import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { catalog06Module } from './module.js';

describe('@ci/catalog-06', () => {
  it('declares its direct dependencies', () => {
    expect(catalog06Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/users',
      '@ci/billing',
      '@ci/audit',
      '@ci/catalog-flaky-05',
      '@ci/catalog-03',
    ]);
  });

  it('sits at depth 14 of the graph', () => {
    expect(depthOf(catalog06Module)).toBe(14);
  });

  it('reaches all 32 transitive dependencies', () => {
    expect(transitiveNames(catalog06Module)).toEqual([
      '@ci/audit',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/catalog-02',
      '@ci/catalog-03',
      '@ci/catalog-flaky-05',
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
      '@ci/payments',
      '@ci/queue',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/shipping',
      '@ci/storage',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
