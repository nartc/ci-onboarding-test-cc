import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { billingModule } from '@ci/billing';
import { usersModule } from '@ci/users';
import { fulfillmentCpu07Module } from '@ci/fulfillment-cpu-07';

export const fulfillmentMem09Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-mem-09',
  layer: 'modules',
  deps: [utilsModule, billingModule, usersModule, fulfillmentCpu07Module],
});

export function describeFulfillmentMem09(): string {
  return describeModule(fulfillmentMem09Module);
}
