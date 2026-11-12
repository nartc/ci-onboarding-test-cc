import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { workerModule, runJobs } from './app.js';

describe('@ci/worker', () => {
  it('declares its direct dependencies', () => {
    expect(workerModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/config',
      '@ci/queue',
      '@ci/notifications',
      '@ci/reports',
      '@ci/analytics',
      '@ci/shipping',
      '@ci/tracing',
    ]);
  });

  it('sits at depth 14 of the graph', () => {
    expect(depthOf(workerModule)).toBe(14);
  });

  it('reaches all 31 transitive dependencies', () => {
    expect(transitiveNames(workerModule)).toEqual([
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
      '@ci/feature-flags',
      '@ci/http',
      '@ci/i18n',
      '@ci/inventory',
      '@ci/logger',
      '@ci/metrics',
      '@ci/notifications',
      '@ci/orders',
      '@ci/queue',
      '@ci/reports',
      '@ci/result',
      '@ci/schema',
      '@ci/serializer',
      '@ci/shipping',
      '@ci/storage',
      '@ci/tracing',
      '@ci/types',
      '@ci/users',
      '@ci/utils',
      '@ci/validation',
    ]);
  });

  it('runs jobs it has handlers for', () => {
    expect(
      runJobs([
        { id: 'a', kind: 'notify' },
        { id: 'b', kind: 'report' },
      ]),
    ).toEqual(['a:done', 'b:done']);
  });
});
