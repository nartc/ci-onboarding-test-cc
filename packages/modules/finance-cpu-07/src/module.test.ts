import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { financeCpu07Module } from './module.js';

describe('@ci/finance-cpu-07', () => {
  it('declares its direct dependencies', () => {
    expect(financeCpu07Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/queue',
      '@ci/notifications',
      '@ci/users',
      '@ci/finance-06',
    ]);
  });

  it('sits at depth 15 of the graph', () => {
    expect(depthOf(financeCpu07Module)).toBe(15);
  });

  it('reaches all 34 transitive dependencies', () => {
    expect(transitiveNames(financeCpu07Module)).toEqual([
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
      '@ci/finance-01',
      '@ci/finance-06',
      '@ci/finance-flaky-05',
      '@ci/finance-slow-04',
      '@ci/http',
      '@ci/i18n',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/notifications',
      '@ci/orders',
      '@ci/queue',
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
