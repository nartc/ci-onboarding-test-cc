import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { fulfillmentSlow16Module } from '@ci/fulfillment-slow-16';

export const fulfillment17Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-17',
  layer: 'modules',
  deps: [utilsModule, usersModule, fulfillmentSlow16Module],
});

export function describeFulfillment17(): string {
  return describeModule(fulfillment17Module);
}
