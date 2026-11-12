import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { featureFlagsModule } from '@ci/feature-flags';
import { fulfillment06Module } from '@ci/fulfillment-06';

export const fulfillmentSlow20Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-slow-20',
  layer: 'modules',
  deps: [utilsModule, featureFlagsModule, fulfillment06Module],
});

export function describeFulfillmentSlow20(): string {
  return describeModule(fulfillmentSlow20Module);
}
