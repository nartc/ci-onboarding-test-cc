import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { analyticsModule } from '@ci/analytics';
import { checkoutMem18Module } from '@ci/checkout-mem-18';
import { catalog10Module } from '@ci/catalog-10';

export const checkout19Module: ModuleInfo = defineModule({
  name: '@ci/checkout-19',
  layer: 'modules',
  deps: [utilsModule, analyticsModule, checkoutMem18Module, catalog10Module],
});

export function describeCheckout19(): string {
  return describeModule(checkout19Module);
}
