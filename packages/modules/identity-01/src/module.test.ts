import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { identity01Module } from './module.js';

describe('@ci/identity-01', () => {
  it('declares its direct dependencies', () => {
    expect(identity01Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/cache',
      '@ci/fulfillment-slow-12',
    ]);
  });

  it('sits at depth 15 of the graph', () => {
    expect(depthOf(identity01Module)).toBe(15);
  });

  it('reaches all 34 transitive dependencies', () => {
    expect(transitiveNames(identity01Module)).toEqual([
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
      '@ci/fulfillment-slow-12',
      '@ci/http',
      '@ci/i18n',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/notifications',
      '@ci/orders',
      '@ci/queue',
      '@ci/recommendations',
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
