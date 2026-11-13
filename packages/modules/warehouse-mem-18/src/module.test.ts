import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { warehouseMem18Module } from './module.js';

describe('@ci/warehouse-mem-18', () => {
  it('declares its direct dependencies', () => {
    expect(warehouseMem18Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/storage',
      '@ci/users',
      '@ci/audit',
      '@ci/warehouse-17',
      '@ci/warehouse-10',
    ]);
  });

  it('sits at depth 12 of the graph', () => {
    expect(depthOf(warehouseMem18Module)).toBe(12);
  });

  it('reaches all 27 transitive dependencies', () => {
    expect(transitiveNames(warehouseMem18Module)).toEqual([
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
      '@ci/logger',
      '@ci/metrics',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/storage',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
      '@ci/warehouse-06',
      '@ci/warehouse-10',
      '@ci/warehouse-17',
    ]);
  });
});
