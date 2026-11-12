import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { warehouse11Module } from './module.js';

describe('@ci/warehouse-11', () => {
  it('declares its direct dependencies', () => {
    expect(warehouse11Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/http',
      '@ci/support-11',
    ]);
  });

  it('sits at depth 12 of the graph', () => {
    expect(depthOf(warehouse11Module)).toBe(12);
  });

  it('reaches all 25 transitive dependencies', () => {
    expect(transitiveNames(warehouse11Module)).toEqual([
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
      '@ci/support-11',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
