import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { pricing02Module } from './module.js';

describe('@ci/pricing-02', () => {
  it('declares its direct dependencies', () => {
    expect(pricing02Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/config',
      '@ci/audit',
      '@ci/pricing-01',
    ]);
  });

  it('sits at depth 11 of the graph', () => {
    expect(depthOf(pricing02Module)).toBe(11);
  });

  it('reaches all 23 transitive dependencies', () => {
    expect(transitiveNames(pricing02Module)).toEqual([
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
      '@ci/logger',
      '@ci/metrics',
      '@ci/pricing-01',
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
