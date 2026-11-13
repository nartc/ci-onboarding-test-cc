import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { i18nModule } from '@ci/i18n';
import { inventoryModule } from '@ci/inventory';
import { checkout02Module } from '@ci/checkout-02';

export const checkoutSlow04Module: ModuleInfo = defineModule({
  name: '@ci/checkout-slow-04',
  layer: 'modules',
  deps: [utilsModule, i18nModule, inventoryModule, checkout02Module],
});

export function describeCheckoutSlow04(): string {
  return describeModule(checkoutSlow04Module);
}
