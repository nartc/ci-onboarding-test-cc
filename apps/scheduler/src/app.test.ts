import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { schedulerModule, dueAt } from './app.js';

describe('@ci/scheduler', () => {
  it('declares its direct dependencies', () => {
    expect(schedulerModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/config',
      '@ci/logger',
      '@ci/queue',
      '@ci/reports',
      '@ci/date',
    ]);
  });

  it('sits at depth 14 of the graph', () => {
    expect(depthOf(schedulerModule)).toBe(14);
  });

  it('reaches all 28 transitive dependencies', () => {
    expect(transitiveNames(schedulerModule)).toEqual([
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
      '@ci/reports',
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

  it('runs frequent tasks', () => {
    expect(dueAt(10)).toEqual(['queue.drain']);
    expect(dueAt(1440)).toEqual(['reports.daily', 'queue.drain']);
  });
});
