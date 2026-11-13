import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { auditModule } from '@ci/audit';
import { ordersModule } from '@ci/orders';
import { fulfillment06Module } from '@ci/fulfillment-06';

export const fulfillmentCpu07Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-cpu-07',
  layer: 'modules',
  deps: [utilsModule, auditModule, ordersModule, fulfillment06Module],
});

export function describeFulfillmentCpu07(): string {
  return describeModule(fulfillmentCpu07Module);
}
