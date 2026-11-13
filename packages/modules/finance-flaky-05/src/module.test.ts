import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { financeFlaky05Module } from './module.js';

describe('@ci/finance-flaky-05', () => {
  it('declares its direct dependencies', () => {
    expect(financeFlaky05Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/search',
      '@ci/schema',
      '@ci/finance-slow-04',
      '@ci/finance-01',
    ]);
  });

  it('sits at depth 13 of the graph', () => {
    expect(depthOf(financeFlaky05Module)).toBe(13);
  });

  it('reaches all 32 transitive dependencies', () => {
    expect(transitiveNames(financeFlaky05Module)).toEqual([
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
