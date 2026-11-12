import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { marketing11Module } from './module.js';

describe('@ci/marketing-11', () => {
  it('declares its direct dependencies', () => {
    expect(marketing11Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/search',
      '@ci/billing',
      '@ci/notifications',
      '@ci/marketing-10',
      '@ci/marketing-01',
    ]);
  });

  it('sits at depth 16 of the graph', () => {
    expect(depthOf(marketing11Module)).toBe(16);
  });

  it('reaches all 37 transitive dependencies', () => {
    expect(transitiveNames(marketing11Module)).toEqual([
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
      '@ci/http',
      '@ci/i18n',
      '@ci/identity-10',
      '@ci/inventory',
      '@ci/logger',
      '@ci/marketing-01',
      '@ci/marketing-10',
      '@ci/marketing-mem-09',
      '@ci/marketing-slow-08',
      '@ci/metrics',
      '@ci/notifications',
      '@ci/orders',
      '@ci/queue',
      '@ci/result',
      '@ci/schema',
      '@ci/search',
      '@ci/serializer',
      '@ci/shipping',
      '@ci/storage',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
