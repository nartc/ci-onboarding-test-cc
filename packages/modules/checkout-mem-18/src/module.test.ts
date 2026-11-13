import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { checkoutMem18Module } from './module.js';

describe('@ci/checkout-mem-18', () => {
  it('declares its direct dependencies', () => {
    expect(checkoutMem18Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/tracing',
      '@ci/checkout-02',
    ]);
  });

  it('sits at depth 12 of the graph', () => {
    expect(depthOf(checkoutMem18Module)).toBe(12);
  });

  it('reaches all 22 transitive dependencies', () => {
    expect(transitiveNames(checkoutMem18Module)).toEqual([
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
      '@ci/http',
      '@ci/logger',
      '@ci/metrics',
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
