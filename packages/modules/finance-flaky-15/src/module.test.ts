import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { financeFlaky15Module } from './module.js';

describe('@ci/finance-flaky-15', () => {
  it('declares its direct dependencies', () => {
    expect(financeFlaky15Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/notifications',
      '@ci/finance-slow-04',
    ]);
  });

  it('sits at depth 11 of the graph', () => {
    expect(depthOf(financeFlaky15Module)).toBe(11);
  });

  it('reaches all 25 transitive dependencies', () => {
    expect(transitiveNames(financeFlaky15Module)).toEqual([
      '@ci/auth',
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/feature-flags',
      '@ci/finance-slow-04',
      '@ci/http',
      '@ci/i18n',
      '@ci/logger',
      '@ci/metrics',
      '@ci/notifications',
      '@ci/queue',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
