import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { inventoryModule } from './module.js';

describe('@ci/inventory', () => {
  it('declares its direct dependencies', () => {
    expect(inventoryModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/db',
      '@ci/cache',
      '@ci/events',
      '@ci/schema',
    ]);
  });

  it('sits at depth 8 of the graph', () => {
    expect(depthOf(inventoryModule)).toBe(8);
  });

  it('reaches all 13 transitive dependencies', () => {
    expect(transitiveNames(inventoryModule)).toEqual([
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/logger',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
