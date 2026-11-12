import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { searchModule } from '@ci/search';
import { fulfillmentFlaky05Module } from '@ci/fulfillment-flaky-05';

export const fulfillment06Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-06',
  layer: 'modules',
  deps: [utilsModule, searchModule, fulfillmentFlaky05Module],
});

export function describeFulfillment06(): string {
  return describeModule(fulfillment06Module);
}
