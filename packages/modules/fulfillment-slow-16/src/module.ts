import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { schemaModule } from '@ci/schema';
import { searchModule } from '@ci/search';
import { fulfillmentFlaky15Module } from '@ci/fulfillment-flaky-15';

export const fulfillmentSlow16Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-slow-16',
  layer: 'modules',
  deps: [utilsModule, schemaModule, searchModule, fulfillmentFlaky15Module],
});

export function describeFulfillmentSlow16(): string {
  return describeModule(fulfillmentSlow16Module);
}
