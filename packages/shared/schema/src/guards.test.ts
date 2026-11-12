import { describe, expect, it } from 'vitest';
import { isOrder, isUser, userFields } from './index.js';

describe('generated schema guards', () => {
  it('accepts valid values', () => {
    expect(isUser({ id: 'u1', email: 'a@b.c', displayName: 'A', active: true })).toBe(true);
  });

  it('rejects invalid values', () => {
    expect(isOrder({ id: 'o1', userId: 'u1', totalCents: '12', status: 'new' })).toBe(false);
    expect(isOrder(null)).toBe(false);
  });

  it('exposes field lists', () => {
    expect(userFields).toEqual(['id', 'email', 'displayName', 'active']);
  });
});
