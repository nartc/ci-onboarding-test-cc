import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { inventoryModule } from '@ci/inventory';
import { storageModule } from '@ci/storage';
import { fulfillmentCpu07Module } from '@ci/fulfillment-cpu-07';

export const identityMem09Module: ModuleInfo = defineModule({
  name: '@ci/identity-mem-09',
  layer: 'modules',
  deps: [utilsModule, inventoryModule, storageModule, fulfillmentCpu07Module],
});

export function describeIdentityMem09(): string {
  return describeModule(identityMem09Module);
}
