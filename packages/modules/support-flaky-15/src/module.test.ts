import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { supportFlaky15Module } from './module.js';

describe('@ci/support-flaky-15', () => {
  it('declares its direct dependencies', () => {
    expect(supportFlaky15Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/queue',
      '@ci/shipping',
    ]);
  });

  it('sits at depth 13 of the graph', () => {
    expect(depthOf(supportFlaky15Module)).toBe(13);
  });

  it('reaches all 25 transitive dependencies', () => {
    expect(transitiveNames(supportFlaky15Module)).toEqual([
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
      '@ci/http',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/queue',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/shipping',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
