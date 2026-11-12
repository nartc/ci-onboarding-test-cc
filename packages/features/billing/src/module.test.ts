import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { billingModule } from './module.js';

describe('@ci/billing', () => {
  it('declares its direct dependencies', () => {
    expect(billingModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/users',
      '@ci/db',
      '@ci/events',
      '@ci/date',
      '@ci/schema',
    ]);
  });

  it('sits at depth 10 of the graph', () => {
    expect(depthOf(billingModule)).toBe(10);
  });

  it('reaches all 18 transitive dependencies', () => {
    expect(transitiveNames(billingModule)).toEqual([
      '@ci/auth',
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/http',
      '@ci/logger',
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
