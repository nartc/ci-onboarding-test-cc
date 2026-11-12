import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { eventsModule } from './module.js';

describe('@ci/events', () => {
  it('declares its direct dependencies', () => {
    expect(eventsModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/logger',
      '@ci/serializer',
    ]);
  });

  it('sits at depth 6 of the graph', () => {
    expect(depthOf(eventsModule)).toBe(6);
  });

  it('reaches all 8 transitive dependencies', () => {
    expect(transitiveNames(eventsModule)).toEqual([
      '@ci/constants',
      '@ci/errors',
      '@ci/logger',
      '@ci/result',
      '@ci/serializer',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
