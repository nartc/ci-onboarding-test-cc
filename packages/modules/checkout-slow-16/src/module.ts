import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { storageModule } from '@ci/storage';
import { notificationsModule } from '@ci/notifications';
import { checkoutFlaky15Module } from '@ci/checkout-flaky-15';

export const checkoutSlow16Module: ModuleInfo = defineModule({
  name: '@ci/checkout-slow-16',
  layer: 'modules',
  deps: [utilsModule, storageModule, notificationsModule, checkoutFlaky15Module],
});

export function describeCheckoutSlow16(): string {
  return describeModule(checkoutSlow16Module);
}
