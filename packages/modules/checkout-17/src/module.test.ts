import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { checkout17Module } from './module.js';

describe('@ci/checkout-17', () => {
  it('declares its direct dependencies', () => {
    expect(checkout17Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/analytics',
      '@ci/reports',
      '@ci/serializer',
      '@ci/checkout-cpu-07',
    ]);
  });

  it('sits at depth 14 of the graph', () => {
    expect(depthOf(checkout17Module)).toBe(14);
  });

  it('reaches all 31 transitive dependencies', () => {
    expect(transitiveNames(checkout17Module)).toEqual([
      '@ci/analytics',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/checkout-02',
      '@ci/checkout-cpu-07',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/feature-flags',
      '@ci/http',
      '@ci/i18n',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/queue',
      '@ci/reports',
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
