import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { crm11Module } from './module.js';

describe('@ci/crm-11', () => {
  it('declares its direct dependencies', () => {
    expect(crm11Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/db',
      '@ci/inventory',
      '@ci/audit',
    ]);
  });

  it('sits at depth 11 of the graph', () => {
    expect(depthOf(crm11Module)).toBe(11);
  });

  it('reaches all 23 transitive dependencies', () => {
    expect(transitiveNames(crm11Module)).toEqual([
      '@ci/audit',
      '@ci/auth',
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
