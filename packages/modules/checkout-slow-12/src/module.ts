import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { searchModule } from '@ci/search';
import { cryptoModule } from '@ci/crypto';
import { checkout01Module } from '@ci/checkout-01';
import { catalog13Module } from '@ci/catalog-13';

export const checkoutSlow12Module: ModuleInfo = defineModule({
  name: '@ci/checkout-slow-12',
  layer: 'modules',
  deps: [utilsModule, searchModule, cryptoModule, checkout01Module, catalog13Module],
});

export function describeCheckoutSlow12(): string {
  return describeModule(checkoutSlow12Module);
}
