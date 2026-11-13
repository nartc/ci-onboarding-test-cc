import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { marketingSlow20Module } from './module.js';

describe('@ci/marketing-slow-20', () => {
  it('declares its direct dependencies', () => {
    expect(marketingSlow20Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/shipping',
      '@ci/marketing-10',
      '@ci/identity-slow-04',
    ]);
  });

  it('sits at depth 16 of the graph', () => {
    expect(depthOf(marketingSlow20Module)).toBe(16);
  });

  it('reaches all 39 transitive dependencies', () => {
    expect(transitiveNames(marketingSlow20Module)).toEqual([
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
      '@ci/fulfillment-02',
      '@ci/fulfillment-03',
      '@ci/http',
      '@ci/i18n',
      '@ci/identity-03',
      '@ci/identity-10',
      '@ci/identity-slow-04',
      '@ci/inventory',
      '@ci/logger',
      '@ci/marketing-10',
      '@ci/marketing-mem-09',
      '@ci/marketing-slow-08',
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
