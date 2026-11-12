import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { cliModule, run } from './app.js';

describe('@ci/cli', () => {
  it('declares its direct dependencies', () => {
    expect(cliModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/sdk',
      '@ci/config',
      '@ci/logger',
      '@ci/serializer',
    ]);
  });

  it('sits at depth 10 of the graph', () => {
    expect(depthOf(cliModule)).toBe(10);
  });

  it('reaches all 16 transitive dependencies', () => {
    expect(transitiveNames(cliModule)).toEqual([
      '@ci/auth',
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/db',
      '@ci/errors',
      '@ci/http',
      '@ci/logger',
      '@ci/result',
      '@ci/schema',
      '@ci/sdk',
      '@ci/serializer',
      '@ci/types',
      '@ci/utils',
      '@ci/validation',
    ]);
  });

  it('prints usage by default', () => {
    expect(run([])).toContain('usage');
  });

  it('lists modules', () => {
    expect(run(['list']).split('\n')).toContain('@ci/sdk');
  });
});
