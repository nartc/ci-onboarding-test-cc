import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { cacheModule } from '@ci/cache';
import { fulfillmentSlow12Module } from '@ci/fulfillment-slow-12';

export const identity01Module: ModuleInfo = defineModule({
  name: '@ci/identity-01',
  layer: 'modules',
  deps: [utilsModule, cacheModule, fulfillmentSlow12Module],
});

export function describeIdentity01(): string {
  return describeModule(identity01Module);
}
