import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { recommendationsModule } from './module.js';

describe('@ci/recommendations', () => {
  it('declares its direct dependencies', () => {
    expect(recommendationsModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/search',
      '@ci/analytics',
      '@ci/users',
      '@ci/feature-flags',
    ]);
  });

  it('sits at depth 13 of the graph', () => {
    expect(depthOf(recommendationsModule)).toBe(13);
  });

  it('reaches all 27 transitive dependencies', () => {
    expect(transitiveNames(recommendationsModule)).toEqual([
      '@ci/analytics',
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
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/queue',
      '@ci/result',
      '@ci/schema',
      '@ci/search',
      '@ci/serializer',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
