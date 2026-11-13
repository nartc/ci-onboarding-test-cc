import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { dateModule } from '@ci/date';
import { recommendationsModule } from '@ci/recommendations';
import { checkoutSlow08Module } from '@ci/checkout-slow-08';

export const checkout13Module: ModuleInfo = defineModule({
  name: '@ci/checkout-13',
  layer: 'modules',
  deps: [utilsModule, dateModule, recommendationsModule, checkoutSlow08Module],
});

export function describeCheckout13(): string {
  return describeModule(checkout13Module);
}
