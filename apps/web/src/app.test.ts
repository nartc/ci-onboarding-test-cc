import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { webModule, render } from './app.js';

describe('@ci/web', () => {
  it('declares its direct dependencies', () => {
    expect(webModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/ui-components',
      '@ci/ui-forms',
      '@ci/ui-layout',
      '@ci/sdk',
      '@ci/i18n',
    ]);
  });

  it('sits at depth 10 of the graph', () => {
    expect(depthOf(webModule)).toBe(10);
  });

  it('reaches all 23 transitive dependencies', () => {
    expect(transitiveNames(webModule)).toEqual([
      '@ci/auth',
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/http',
      '@ci/i18n',
      '@ci/logger',
      '@ci/result',
      '@ci/schema',
      '@ci/sdk',
      '@ci/serializer',
      '@ci/types',
      '@ci/ui-components',
      '@ci/ui-forms',
      '@ci/ui-layout',
      '@ci/ui-primitives',
      '@ci/ui-tokens',
      '@ci/utils',
      '@ci/validation',
    ]);
  });

  it('renders modules', () => {
    expect(render('/')).toContain('<li>@ci/sdk</li>');
  });
});
