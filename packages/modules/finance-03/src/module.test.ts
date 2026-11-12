import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { finance03Module } from './module.js';

describe('@ci/finance-03', () => {
  it('declares its direct dependencies', () => {
    expect(finance03Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/users',
      '@ci/finance-02',
    ]);
  });

  it('sits at depth 14 of the graph', () => {
    expect(depthOf(finance03Module)).toBe(14);
  });

  it('reaches all 32 transitive dependencies', () => {
    expect(transitiveNames(finance03Module)).toEqual([
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
