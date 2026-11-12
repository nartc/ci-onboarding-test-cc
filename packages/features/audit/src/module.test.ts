import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { auditModule } from './module.js';

describe('@ci/audit', () => {
  it('declares its direct dependencies', () => {
    expect(auditModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/events',
      '@ci/users',
      '@ci/storage',
      '@ci/tracing',
    ]);
  });

  it('sits at depth 10 of the graph', () => {
    expect(depthOf(auditModule)).toBe(10);
  });

  it('reaches all 21 transitive dependencies', () => {
    expect(transitiveNames(auditModule)).toEqual([
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
