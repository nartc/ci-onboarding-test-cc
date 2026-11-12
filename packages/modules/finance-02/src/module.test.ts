import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { finance02Module } from './module.js';

describe('@ci/finance-02', () => {
  it('declares its direct dependencies', () => {
    expect(finance02Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/shipping',
      '@ci/feature-flags',
      '@ci/users',
      '@ci/finance-01',
    ]);
  });

  it('sits at depth 13 of the graph', () => {
    expect(depthOf(finance02Module)).toBe(13);
  });

  it('reaches all 31 transitive dependencies', () => {
    expect(transitiveNames(finance02Module)).toEqual([
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
