import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { searchModule } from './module.js';

describe('@ci/search', () => {
  it('declares its direct dependencies', () => {
    expect(searchModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/inventory',
      '@ci/orders',
      '@ci/cache',
    ]);
  });

  it('sits at depth 12 of the graph', () => {
    expect(depthOf(searchModule)).toBe(12);
  });

  it('reaches all 24 transitive dependencies', () => {
    expect(transitiveNames(searchModule)).toEqual([
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
      '@ci/orders',
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
