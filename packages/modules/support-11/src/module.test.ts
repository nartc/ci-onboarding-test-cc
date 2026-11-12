import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { support11Module } from './module.js';

describe('@ci/support-11', () => {
  it('declares its direct dependencies', () => {
    expect(support11Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/metrics',
      '@ci/notifications',
    ]);
  });

  it('sits at depth 11 of the graph', () => {
    expect(depthOf(support11Module)).toBe(11);
  });

  it('reaches all 24 transitive dependencies', () => {
    expect(transitiveNames(support11Module)).toEqual([
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
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
