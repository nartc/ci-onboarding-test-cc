import { describe, expect, it } from 'vitest';
import { defineModule, depthOf, describeModule, transitiveNames } from './graph.js';

const leaf = defineModule({ name: 'leaf', layer: 'shared', deps: [] });
const mid = defineModule({ name: 'mid', layer: 'platform', deps: [leaf] });
const top = defineModule({ name: 'top', layer: 'app', deps: [mid, leaf] });

describe('graph helpers', () => {
  it('computes depth as the longest path', () => {
    expect(depthOf(leaf)).toBe(0);
    expect(depthOf(top)).toBe(2);
  });

  it('dedupes transitive dependencies', () => {
    expect(transitiveNames(top)).toEqual(['leaf', 'mid']);
  });

  it('renders a tree', () => {
    expect(describeModule(mid)).toBe('mid (platform)\n  leaf (shared)');
  });
});
