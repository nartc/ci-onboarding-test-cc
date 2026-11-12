import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { checkout02Module } from './module.js';

describe('@ci/checkout-02', () => {
  it('declares its direct dependencies', () => {
    expect(checkout02Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/auth',
      '@ci/billing',
    ]);
  });

  it('sits at depth 11 of the graph', () => {
    expect(depthOf(checkout02Module)).toBe(11);
  });

  it('reaches all 19 transitive dependencies', () => {
    expect(transitiveNames(checkout02Module)).toEqual([
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
      '@ci/logger',
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
