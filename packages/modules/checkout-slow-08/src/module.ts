import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { billingModule } from '@ci/billing';
import { recommendationsModule } from '@ci/recommendations';
import { checkoutCpu07Module } from '@ci/checkout-cpu-07';

export const checkoutSlow08Module: ModuleInfo = defineModule({
  name: '@ci/checkout-slow-08',
  layer: 'modules',
  deps: [utilsModule, billingModule, recommendationsModule, checkoutCpu07Module],
});

export function describeCheckoutSlow08(): string {
  return describeModule(checkoutSlow08Module);
}
