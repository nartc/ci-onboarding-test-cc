import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { fulfillment11Module } from './module.js';

describe('@ci/fulfillment-11', () => {
  it('declares its direct dependencies', () => {
    expect(fulfillment11Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/analytics',
      '@ci/fulfillment-10',
    ]);
  });

  it('sits at depth 19 of the graph', () => {
    expect(depthOf(fulfillment11Module)).toBe(19);
  });

  it('reaches all 40 transitive dependencies', () => {
    expect(transitiveNames(fulfillment11Module)).toEqual([
      '@ci/analytics',
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
      '@ci/feature-flags',
      '@ci/fulfillment-02',
      '@ci/fulfillment-03',
      '@ci/fulfillment-06',
      '@ci/fulfillment-10',
      '@ci/fulfillment-cpu-07',
      '@ci/fulfillment-flaky-05',
      '@ci/fulfillment-mem-09',
      '@ci/fulfillment-slow-04',
      '@ci/http',
      '@ci/i18n',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/payments',
      '@ci/queue',
      '@ci/reports',
      '@ci/result',
      '@ci/schema',
      '@ci/search',
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
