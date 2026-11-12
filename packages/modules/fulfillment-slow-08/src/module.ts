import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { tracingModule } from '@ci/tracing';
import { fulfillmentCpu07Module } from '@ci/fulfillment-cpu-07';

export const fulfillmentSlow08Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-slow-08',
  layer: 'modules',
  deps: [utilsModule, tracingModule, fulfillmentCpu07Module],
});

export function describeFulfillmentSlow08(): string {
  return describeModule(fulfillmentSlow08Module);
}
