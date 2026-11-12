import { createServer, type Server } from 'node:http';
import { defineModule, depthOf, transitiveNames, utilsModule, type ModuleInfo } from '@ci/utils';
import { httpModule } from '@ci/http';
import { configModule } from '@ci/config';
import { authModule } from '@ci/auth';
import { usersModule } from '@ci/users';
import { billingModule } from '@ci/billing';
import { paymentsModule } from '@ci/payments';
import { ordersModule } from '@ci/orders';
import { shippingModule } from '@ci/shipping';
import { inventoryModule } from '@ci/inventory';
import { notificationsModule } from '@ci/notifications';
import { searchModule } from '@ci/search';
import { recommendationsModule } from '@ci/recommendations';
import { auditModule } from '@ci/audit';
import { metricsModule } from '@ci/metrics';
import { tracingModule } from '@ci/tracing';
import { featureFlagsModule } from '@ci/feature-flags';

export const apiModule: ModuleInfo = defineModule({
  name: '@ci/api',
  layer: 'app',
  deps: [
    utilsModule,
    httpModule,
    configModule,
    authModule,
    usersModule,
    billingModule,
    paymentsModule,
    ordersModule,
    shippingModule,
    inventoryModule,
    notificationsModule,
    searchModule,
    recommendationsModule,
    auditModule,
    metricsModule,
    tracingModule,
    featureFlagsModule,
  ],
});

export interface Reply {
  status: number;
  body: unknown;
}

export function handle(method: string, url: string): Reply {
  if (method !== 'GET') return { status: 405, body: { error: 'method not allowed' } };
  if (url === '/health') return { status: 200, body: { status: 'ok' } };
  if (url === '/modules') return { status: 200, body: transitiveNames(apiModule) };
  if (url === '/depth') return { status: 200, body: { depth: depthOf(apiModule) } };
  return { status: 404, body: { error: 'not found' } };
}

export function createApp(): Server {
  return createServer((req, res) => {
    const reply = handle(req.method ?? 'GET', req.url ?? '/');
    res.writeHead(reply.status, { 'content-type': 'application/json' });
    res.end(JSON.stringify(reply.body));
  });
}
