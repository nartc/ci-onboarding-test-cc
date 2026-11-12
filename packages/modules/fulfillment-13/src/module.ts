import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { auditModule } from '@ci/audit';
import { notificationsModule } from '@ci/notifications';
import { ordersModule } from '@ci/orders';
import { fulfillmentSlow12Module } from '@ci/fulfillment-slow-12';
import { fulfillmentSlow08Module } from '@ci/fulfillment-slow-08';

export const fulfillment13Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-13',
  layer: 'modules',
  deps: [
    utilsModule,
    auditModule,
    notificationsModule,
    ordersModule,
    fulfillmentSlow12Module,
    fulfillmentSlow08Module,
  ],
});

export function describeFulfillment13(): string {
  return describeModule(fulfillment13Module);
}
