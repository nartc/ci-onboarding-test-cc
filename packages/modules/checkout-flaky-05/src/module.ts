import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { paymentsModule } from '@ci/payments';
import { ordersModule } from '@ci/orders';
import { loggerModule } from '@ci/logger';
import { checkoutSlow04Module } from '@ci/checkout-slow-04';
import { checkout01Module } from '@ci/checkout-01';

export const checkoutFlaky05Module: ModuleInfo = defineModule({
  name: '@ci/checkout-flaky-05',
  layer: 'modules',
  deps: [
    utilsModule,
    paymentsModule,
    ordersModule,
    loggerModule,
    checkoutSlow04Module,
    checkout01Module,
  ],
});

export function describeCheckoutFlaky05(): string {
  return describeModule(checkoutFlaky05Module);
}
