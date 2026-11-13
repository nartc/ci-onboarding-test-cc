import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { inventoryModule } from '@ci/inventory';
import { fulfillment17Module } from '@ci/fulfillment-17';
import { fulfillmentCpu07Module } from '@ci/fulfillment-cpu-07';

export const fulfillmentMem18Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-mem-18',
  layer: 'modules',
  deps: [utilsModule, inventoryModule, fulfillment17Module, fulfillmentCpu07Module],
});

export function describeFulfillmentMem18(): string {
  return describeModule(fulfillmentMem18Module);
}
