import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { checkoutSlow04Module } from './module.js';

describe('@ci/checkout-slow-04', () => {
  it('declares its direct dependencies', () => {
    expect(checkoutSlow04Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/i18n',
      '@ci/inventory',
      '@ci/checkout-02',
    ]);
  });

  it('sits at depth 12 of the graph', () => {
    expect(depthOf(checkoutSlow04Module)).toBe(12);
  });

  it('reaches all 22 transitive dependencies', () => {
    expect(transitiveNames(checkoutSlow04Module)).toEqual([
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
      '@ci/i18n',
      '@ci/inventory',
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
