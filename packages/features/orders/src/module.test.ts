import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { ordersModule } from './module.js';

describe('@ci/orders', () => {
  it('declares its direct dependencies', () => {
    expect(ordersModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/users',
      '@ci/inventory',
      '@ci/billing',
      '@ci/queue',
      '@ci/schema',
    ]);
  });

  it('sits at depth 11 of the graph', () => {
    expect(depthOf(ordersModule)).toBe(11);
  });

  it('reaches all 23 transitive dependencies', () => {
    expect(transitiveNames(ordersModule)).toEqual([
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
      '@ci/queue',
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
