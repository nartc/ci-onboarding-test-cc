import { createServer, type Server } from 'node:http';
import { defineModule, depthOf, transitiveNames, utilsModule, type ModuleInfo } from '@ci/utils';
import { configModule } from '@ci/config';
import { httpModule } from '@ci/http';
import { catalogModule } from '@ci/catalog';
import { checkoutModule } from '@ci/checkout';
import { crmModule } from '@ci/crm';
import { financeModule } from '@ci/finance';
import { fulfillmentModule } from '@ci/fulfillment';
import { identityModule } from '@ci/identity';
import { marketingModule } from '@ci/marketing';
import { pricingModule } from '@ci/pricing';
import { supportModule } from '@ci/support';
import { warehouseModule } from '@ci/warehouse';

export const gatewayModule: ModuleInfo = defineModule({
  name: '@ci/gateway',
  layer: 'app',
  deps: [
    utilsModule,
    configModule,
    httpModule,
    catalogModule,
    checkoutModule,
    crmModule,
    financeModule,
    fulfillmentModule,
    identityModule,
    marketingModule,
    pricingModule,
    supportModule,
    warehouseModule,
  ],
});

export interface Reply {
  status: number;
  body: unknown;
}

export function handle(method: string, url: string): Reply {
  if (method !== 'GET') return { status: 405, body: { error: 'method not allowed' } };
  if (url === '/health') return { status: 200, body: { status: 'ok' } };
  if (url === '/domains') {
    return {
      status: 200,
      body: gatewayModule.deps.filter((d) => d.layer === 'modules').map((d) => d.name),
    };
  }
  if (url === '/modules') return { status: 200, body: transitiveNames(gatewayModule) };
  if (url === '/depth') return { status: 200, body: { depth: depthOf(gatewayModule) } };
  return { status: 404, body: { error: 'not found' } };
}

export function createApp(): Server {
  return createServer((req, res) => {
    const reply = handle(req.method ?? 'GET', req.url ?? '/');
    res.writeHead(reply.status, { 'content-type': 'application/json' });
    res.end(JSON.stringify(reply.body));
  });
}
