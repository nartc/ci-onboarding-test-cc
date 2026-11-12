import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { identity10Module } from './module.js';

describe('@ci/identity-10', () => {
  it('declares its direct dependencies', () => {
    expect(identity10Module.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/audit']);
  });

  it('sits at depth 11 of the graph', () => {
    expect(depthOf(identity10Module)).toBe(11);
  });

  it('reaches all 22 transitive dependencies', () => {
    expect(transitiveNames(identity10Module)).toEqual([
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
      '@ci/http',
      '@ci/logger',
      '@ci/metrics',
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
