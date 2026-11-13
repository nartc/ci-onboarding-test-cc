import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { identityFlaky15Module } from './module.js';

describe('@ci/identity-flaky-15', () => {
  it('declares its direct dependencies', () => {
    expect(identityFlaky15Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/queue',
      '@ci/i18n',
      '@ci/storage',
    ]);
  });

  it('sits at depth 10 of the graph', () => {
    expect(depthOf(identityFlaky15Module)).toBe(10);
  });

  it('reaches all 21 transitive dependencies', () => {
    expect(transitiveNames(identityFlaky15Module)).toEqual([
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
      '@ci/logger',
      '@ci/metrics',
      '@ci/queue',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/storage',
      '@ci/tracing',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
