import { describe, expect, it } from 'vitest';
import { chunk, groupBy, slugify } from './collections.js';

describe('collections', () => {
  it('chunks arrays', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('groups by key', () => {
    expect(groupBy(['apple', 'avocado', 'banana'], (s) => s[0] ?? '')).toEqual({
      a: ['apple', 'avocado'],
      b: ['banana'],
    });
  });

  it('slugifies strings', () => {
    expect(slugify('  Hello, World!  ')).toBe('hello-world');
  });
});
