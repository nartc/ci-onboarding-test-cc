import { describe, expect, it } from 'vitest';
import { constantsModule, HTTP_STATUS } from './index.js';

describe('@ci/constants', () => {
  it('depends only on @ci/types', () => {
    expect(constantsModule.deps.map((d) => d.name)).toEqual(['@ci/types']);
  });

  it('exposes http statuses', () => {
    expect(HTTP_STATUS.notFound).toBe(404);
  });
});
