import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { paymentsModule } from './module.js';

describe('@ci/payments', () => {
  it('declares its direct dependencies', () => {
    expect(paymentsModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/billing',
      '@ci/crypto',
      '@ci/http',
      '@ci/feature-flags',
    ]);
  });

  it('sits at depth 11 of the graph', () => {
    expect(depthOf(paymentsModule)).toBe(11);
  });

  it('reaches all 21 transitive dependencies', () => {
    expect(transitiveNames(paymentsModule)).toEqual([
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
