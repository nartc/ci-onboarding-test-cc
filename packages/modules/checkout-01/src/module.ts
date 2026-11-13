import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { inventoryModule } from '@ci/inventory';
import { storageModule } from '@ci/storage';
import { notificationsModule } from '@ci/notifications';
import { catalog11Module } from '@ci/catalog-11';

export const checkout01Module: ModuleInfo = defineModule({
  name: '@ci/checkout-01',
  layer: 'modules',
  deps: [utilsModule, inventoryModule, storageModule, notificationsModule, catalog11Module],
});

export function describeCheckout01(): string {
  return describeModule(checkout01Module);
}
