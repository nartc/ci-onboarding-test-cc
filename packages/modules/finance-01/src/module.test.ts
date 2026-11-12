import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { finance01Module } from './module.js';

describe('@ci/finance-01', () => {
  it('declares its direct dependencies', () => {
    expect(finance01Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/audit',
      '@ci/notifications',
      '@ci/users',
    ]);
  });

  it('sits at depth 11 of the graph', () => {
    expect(depthOf(finance01Module)).toBe(11);
  });

  it('reaches all 26 transitive dependencies', () => {
    expect(transitiveNames(finance01Module)).toEqual([
      '@ci/audit',
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
      '@ci/storage',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
