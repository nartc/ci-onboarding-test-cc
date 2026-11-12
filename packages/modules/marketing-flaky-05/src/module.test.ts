import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { marketingFlaky05Module } from './module.js';

describe('@ci/marketing-flaky-05', () => {
  it('declares its direct dependencies', () => {
    expect(marketingFlaky05Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/billing',
      '@ci/identity-flaky-15',
    ]);
  });

  it('sits at depth 11 of the graph', () => {
    expect(depthOf(marketingFlaky05Module)).toBe(11);
  });

  it('reaches all 25 transitive dependencies', () => {
    expect(transitiveNames(marketingFlaky05Module)).toEqual([
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
      '@ci/i18n',
      '@ci/identity-flaky-15',
      '@ci/logger',
      '@ci/metrics',
      '@ci/queue',
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
