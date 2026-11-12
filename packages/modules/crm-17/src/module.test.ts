import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { crm17Module } from './module.js';

describe('@ci/crm-17', () => {
  it('declares its direct dependencies', () => {
    expect(crm17Module.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/metrics',
      '@ci/inventory',
    ]);
  });

  it('sits at depth 9 of the graph', () => {
    expect(depthOf(crm17Module)).toBe(9);
  });

  it('reaches all 16 transitive dependencies', () => {
    expect(transitiveNames(crm17Module)).toEqual([
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
