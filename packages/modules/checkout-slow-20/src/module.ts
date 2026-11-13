import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { i18nModule } from '@ci/i18n';
import { checkout19Module } from '@ci/checkout-19';
import { catalog19Module } from '@ci/catalog-19';

export const checkoutSlow20Module: ModuleInfo = defineModule({
  name: '@ci/checkout-slow-20',
  layer: 'modules',
  deps: [utilsModule, i18nModule, checkout19Module, catalog19Module],
});

export function describeCheckoutSlow20(): string {
  return describeModule(checkoutSlow20Module);
}
