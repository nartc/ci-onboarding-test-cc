import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { crmSlow16Module } from './module.js';

describe('@ci/crm-slow-16', () => {
  it('declares its direct dependencies', () => {
    expect(crmSlow16Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/recommendations',
      '@ci/search',
      '@ci/inventory',
      '@ci/crm-flaky-15',
    ]);
  });

  it('sits at depth 15 of the graph', () => {
    expect(depthOf(crmSlow16Module)).toBe(15);
  });

  it('reaches all 29 transitive dependencies', () => {
    expect(transitiveNames(crmSlow16Module)).toEqual([
      '@ci/analytics',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/crm-flaky-15',
      '@ci/crypto',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/feature-flags',
      '@ci/http',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/queue',
      '@ci/recommendations',
      '@ci/result',
      '@ci/schema',
      '@ci/search',
      '@ci/serializer',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
