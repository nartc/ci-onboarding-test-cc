import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { shippingModule } from '@ci/shipping';
import { fulfillmentCpu14Module } from '@ci/fulfillment-cpu-14';
import { fulfillment13Module } from '@ci/fulfillment-13';

export const fulfillmentFlaky15Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-flaky-15',
  layer: 'modules',
  deps: [utilsModule, shippingModule, fulfillmentCpu14Module, fulfillment13Module],
});

export function describeFulfillmentFlaky15(): string {
  return describeModule(fulfillmentFlaky15Module);
}
