import { describe, expect, it } from 'vitest';
import { typesModule } from './index.js';

describe('@ci/types', () => {
  it('is a root of the graph', () => {
    expect(typesModule.deps).toEqual([]);
  });
});
