import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { crm02Module } from './module.js';

describe('@ci/crm-02', () => {
  it('declares its direct dependencies', () => {
    expect(crm02Module.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/shipping', '@ci/audit']);
  });

  it('sits at depth 13 of the graph', () => {
    expect(depthOf(crm02Module)).toBe(13);
  });

  it('reaches all 27 transitive dependencies', () => {
    expect(transitiveNames(crm02Module)).toEqual([
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
      '@ci/storage',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
