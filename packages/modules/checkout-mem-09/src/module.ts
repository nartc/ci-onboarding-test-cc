import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { auditModule } from '@ci/audit';
import { recommendationsModule } from '@ci/recommendations';
import { ordersModule } from '@ci/orders';
import { checkoutSlow08Module } from '@ci/checkout-slow-08';
import { checkoutFlaky05Module } from '@ci/checkout-flaky-05';

export const checkoutMem09Module: ModuleInfo = defineModule({
  name: '@ci/checkout-mem-09',
  layer: 'modules',
  deps: [
    utilsModule,
    auditModule,
    recommendationsModule,
    ordersModule,
    checkoutSlow08Module,
    checkoutFlaky05Module,
  ],
});

export function describeCheckoutMem09(): string {
  return describeModule(checkoutMem09Module);
}
