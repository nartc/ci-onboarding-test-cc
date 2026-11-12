import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { recommendationsModule } from '@ci/recommendations';
import { finance01Module } from '@ci/finance-01';

export const fulfillmentSlow12Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-slow-12',
  layer: 'modules',
  deps: [utilsModule, recommendationsModule, finance01Module],
});

export function describeFulfillmentSlow12(): string {
  return describeModule(fulfillmentSlow12Module);
}
