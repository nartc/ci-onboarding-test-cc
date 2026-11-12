import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { ordersModule } from '@ci/orders';
import { fulfillmentSlow04Module } from '@ci/fulfillment-slow-04';
import { fulfillment02Module } from '@ci/fulfillment-02';

export const fulfillmentFlaky05Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-flaky-05',
  layer: 'modules',
  deps: [utilsModule, ordersModule, fulfillmentSlow04Module, fulfillment02Module],
});

export function describeFulfillmentFlaky05(): string {
  return describeModule(fulfillmentFlaky05Module);
}
