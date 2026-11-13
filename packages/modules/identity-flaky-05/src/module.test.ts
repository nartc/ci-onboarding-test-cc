import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { identityFlaky05Module } from './module.js';

describe('@ci/identity-flaky-05', () => {
  it('declares its direct dependencies', () => {
    expect(identityFlaky05Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/recommendations',
      '@ci/analytics',
      '@ci/identity-01',
    ]);
  });

  it('sits at depth 16 of the graph', () => {
    expect(depthOf(identityFlaky05Module)).toBe(16);
  });

  it('reaches all 35 transitive dependencies', () => {
    expect(transitiveNames(identityFlaky05Module)).toEqual([
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
      '@ci/identity-01',
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
