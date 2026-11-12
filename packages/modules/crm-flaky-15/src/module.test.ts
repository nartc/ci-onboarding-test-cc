import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { crmFlaky15Module } from './module.js';

describe('@ci/crm-flaky-15', () => {
  it('declares its direct dependencies', () => {
    expect(crmFlaky15Module.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/recommendations']);
  });

  it('sits at depth 14 of the graph', () => {
    expect(depthOf(crmFlaky15Module)).toBe(14);
  });

  it('reaches all 28 transitive dependencies', () => {
    expect(transitiveNames(crmFlaky15Module)).toEqual([
      '@ci/analytics',
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
