import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { notificationsModule } from './module.js';

describe('@ci/notifications', () => {
  it('declares its direct dependencies', () => {
    expect(notificationsModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/users',
      '@ci/queue',
      '@ci/i18n',
      '@ci/feature-flags',
    ]);
  });

  it('sits at depth 10 of the graph', () => {
    expect(depthOf(notificationsModule)).toBe(10);
  });

  it('reaches all 23 transitive dependencies', () => {
    expect(transitiveNames(notificationsModule)).toEqual([
      '@ci/auth',
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/feature-flags',
      '@ci/http',
      '@ci/i18n',
      '@ci/logger',
      '@ci/metrics',
      '@ci/queue',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
