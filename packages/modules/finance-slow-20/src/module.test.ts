import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { financeSlow20Module } from './module.js';

describe('@ci/finance-slow-20', () => {
  it('declares its direct dependencies', () => {
    expect(financeSlow20Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/shipping',
      '@ci/finance-19',
      '@ci/finance-03',
    ]);
  });

  it('sits at depth 15 of the graph', () => {
    expect(depthOf(financeSlow20Module)).toBe(15);
  });

  it('reaches all 36 transitive dependencies', () => {
    expect(transitiveNames(financeSlow20Module)).toEqual([
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
      '@ci/finance-01',
      '@ci/finance-02',
      '@ci/finance-03',
      '@ci/finance-19',
      '@ci/http',
      '@ci/i18n',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/notifications',
      '@ci/orders',
      '@ci/queue',
      '@ci/reports',
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
