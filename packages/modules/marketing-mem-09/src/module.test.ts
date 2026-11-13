import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { marketingMem09Module } from './module.js';

describe('@ci/marketing-mem-09', () => {
  it('declares its direct dependencies', () => {
    expect(marketingMem09Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/notifications',
      '@ci/marketing-slow-08',
      '@ci/identity-10',
    ]);
  });

  it('sits at depth 14 of the graph', () => {
    expect(depthOf(marketingMem09Module)).toBe(14);
  });

  it('reaches all 32 transitive dependencies', () => {
    expect(transitiveNames(marketingMem09Module)).toEqual([
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
      '@ci/i18n',
      '@ci/identity-10',
      '@ci/inventory',
      '@ci/logger',
      '@ci/marketing-slow-08',
      '@ci/metrics',
      '@ci/notifications',
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
