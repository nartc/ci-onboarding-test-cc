import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { identity13Module } from './module.js';

describe('@ci/identity-13', () => {
  it('declares its direct dependencies', () => {
    expect(identity13Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/payments',
      '@ci/identity-03',
    ]);
  });

  it('sits at depth 12 of the graph', () => {
    expect(depthOf(identity13Module)).toBe(12);
  });

  it('reaches all 23 transitive dependencies', () => {
    expect(transitiveNames(identity13Module)).toEqual([
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
      '@ci/identity-03',
      '@ci/logger',
      '@ci/metrics',
      '@ci/payments',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
