import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { reportsModule } from './module.js';

describe('@ci/reports', () => {
  it('declares its direct dependencies', () => {
    expect(reportsModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/analytics',
      '@ci/billing',
      '@ci/date',
      '@ci/i18n',
      '@ci/storage',
    ]);
  });

  it('sits at depth 13 of the graph', () => {
    expect(depthOf(reportsModule)).toBe(13);
  });

  it('reaches all 27 transitive dependencies', () => {
    expect(transitiveNames(reportsModule)).toEqual([
      '@ci/analytics',
      '@ci/auth',
      '@ci/billing',
      '@ci/cache',
      '@ci/config',
      '@ci/constants',
      '@ci/crypto',
      '@ci/date',
      '@ci/db',
      '@ci/errors',
      '@ci/events',
      '@ci/http',
      '@ci/i18n',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/orders',
      '@ci/queue',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/storage',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });
});
