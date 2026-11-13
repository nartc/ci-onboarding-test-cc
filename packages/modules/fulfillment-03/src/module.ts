import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { ordersModule } from '@ci/orders';
import { fulfillment02Module } from '@ci/fulfillment-02';

export const fulfillment03Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-03',
  layer: 'modules',
  deps: [utilsModule, ordersModule, fulfillment02Module],
});

export function describeFulfillment03(): string {
  return describeModule(fulfillment03Module);
}
