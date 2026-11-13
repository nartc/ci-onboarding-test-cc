import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { finance06Module } from './module.js';

describe('@ci/finance-06', () => {
  it('declares its direct dependencies', () => {
    expect(finance06Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/metrics',
      '@ci/billing',
      '@ci/orders',
      '@ci/finance-flaky-05',
    ]);
  });

  it('sits at depth 14 of the graph', () => {
    expect(depthOf(finance06Module)).toBe(14);
  });

  it('reaches all 33 transitive dependencies', () => {
    expect(transitiveNames(finance06Module)).toEqual([
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
