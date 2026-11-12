import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { apiModule, handle } from './app.js';

describe('@ci/api', () => {
  it('declares its direct dependencies', () => {
    expect(apiModule.deps.map((d) => d.name)).toEqual([
      '@ci/utils',
      '@ci/http',
      '@ci/config',
      '@ci/auth',
      '@ci/users',
      '@ci/billing',
      '@ci/payments',
      '@ci/orders',
      '@ci/shipping',
      '@ci/inventory',
      '@ci/notifications',
      '@ci/search',
      '@ci/recommendations',
      '@ci/audit',
      '@ci/metrics',
      '@ci/tracing',
      '@ci/feature-flags',
    ]);
  });

  it('sits at depth 14 of the graph', () => {
    expect(depthOf(apiModule)).toBe(14);
  });

  it('reaches all 34 transitive dependencies', () => {
    expect(transitiveNames(apiModule)).toEqual([
      '@ci/analytics',
      '@ci/audit',
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
      '@ci/payments',
      '@ci/queue',
      '@ci/recommendations',
      '@ci/result',
      '@ci/schema',
      '@ci/search',
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

  it('serves health', () => {
    expect(handle('GET', '/health')).toEqual({ status: 200, body: { status: 'ok' } });
  });

  it('rejects other methods', () => {
    expect(handle('POST', '/health').status).toBe(405);
  });
});
