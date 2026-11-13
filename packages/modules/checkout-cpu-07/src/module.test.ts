import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { checkoutCpu07Module } from './module.js';

describe('@ci/checkout-cpu-07', () => {
  it('declares its direct dependencies', () => {
    expect(checkoutCpu07Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/feature-flags',
      '@ci/auth',
      '@ci/checkout-02',
    ]);
  });

  it('sits at depth 12 of the graph', () => {
    expect(depthOf(checkoutCpu07Module)).toBe(12);
  });

  it('reaches all 22 transitive dependencies', () => {
    expect(transitiveNames(checkoutCpu07Module)).toEqual([
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/checkout-02',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/feature-flags',
      '@ci/http',
      '@ci/logger',
      '@ci/metrics',
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
