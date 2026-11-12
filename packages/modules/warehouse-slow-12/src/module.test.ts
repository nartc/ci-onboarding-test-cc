import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { warehouseSlow12Module } from './module.js';

describe('@ci/warehouse-slow-12', () => {
  it('declares its direct dependencies', () => {
    expect(warehouseSlow12Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/metrics',
      '@ci/warehouse-11',
    ]);
  });

  it('sits at depth 13 of the graph', () => {
    expect(depthOf(warehouseSlow12Module)).toBe(13);
  });

  it('reaches all 26 transitive dependencies', () => {
    expect(transitiveNames(warehouseSlow12Module)).toEqual([
      '@ci/auth',
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
      '@ci/i18n',
      '@ci/logger',
      '@ci/metrics',
      '@ci/notifications',
      '@ci/queue',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/support-11',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
      '@ci/warehouse-11',
    ]);
  });
});
