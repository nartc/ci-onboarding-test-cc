import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { financeCpu14Module } from './module.js';

describe('@ci/finance-cpu-14', () => {
  it('declares its direct dependencies', () => {
    expect(financeCpu14Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/users',
      '@ci/analytics',
      '@ci/audit',
    ]);
  });

  it('sits at depth 13 of the graph', () => {
    expect(depthOf(financeCpu14Module)).toBe(13);
  });

  it('reaches all 27 transitive dependencies', () => {
    expect(transitiveNames(financeCpu14Module)).toEqual([
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
      '@ci/http',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/queue',
      '@ci/result',
      '@ci/schema',
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
