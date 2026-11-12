import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { marketing10Module } from './module.js';

describe('@ci/marketing-10', () => {
  it('declares its direct dependencies', () => {
    expect(marketing10Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/validation',
      '@ci/marketing-mem-09',
    ]);
  });

  it('sits at depth 15 of the graph', () => {
    expect(depthOf(marketing10Module)).toBe(15);
  });

  it('reaches all 33 transitive dependencies', () => {
    expect(transitiveNames(marketing10Module)).toEqual([
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
      '@ci/marketing-mem-09',
      '@ci/marketing-slow-08',
      '@ci/metrics',
      '@ci/notifications',
      '@ci/orders',
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
