import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { warehouseFlaky05Module } from './module.js';

describe('@ci/warehouse-flaky-05', () => {
  it('declares its direct dependencies', () => {
    expect(warehouseFlaky05Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/queue',
      '@ci/inventory',
      '@ci/billing',
    ]);
  });

  it('sits at depth 11 of the graph', () => {
    expect(depthOf(warehouseFlaky05Module)).toBe(11);
  });

  it('reaches all 23 transitive dependencies', () => {
    expect(transitiveNames(warehouseFlaky05Module)).toEqual([
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
