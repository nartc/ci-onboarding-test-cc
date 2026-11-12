import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { crm01Module } from './module.js';

describe('@ci/crm-01', () => {
  it('declares its direct dependencies', () => {
    expect(crm01Module.deps.map((d) => d.name)).toEqual(['@ci/utils', '@ci/metrics']);
  });

  it('sits at depth 8 of the graph', () => {
    expect(depthOf(crm01Module)).toBe(8);
  });

  it('reaches all 11 transitive dependencies', () => {
    expect(transitiveNames(crm01Module)).toEqual([
      '@ci/constants',
      '@ci/date',
      '@ci/errors',
      '@ci/events',
      '@ci/logger',
      '@ci/metrics',
      '@ci/result',
      '@ci/serializer',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
