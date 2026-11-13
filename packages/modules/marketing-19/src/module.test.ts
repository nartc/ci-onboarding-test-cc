import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { marketing19Module } from './module.js';

describe('@ci/marketing-19', () => {
  it('declares its direct dependencies', () => {
    expect(marketing19Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/notifications',
      '@ci/db',
      '@ci/payments',
    ]);
  });

  it('sits at depth 12 of the graph', () => {
    expect(depthOf(marketing19Module)).toBe(12);
  });

  it('reaches all 26 transitive dependencies', () => {
    expect(transitiveNames(marketing19Module)).toEqual([
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
      '@ci/logger',
      '@ci/metrics',
      '@ci/notifications',
      '@ci/payments',
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
