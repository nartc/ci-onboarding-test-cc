import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { paymentsModule } from '@ci/payments';
import { analyticsModule } from '@ci/analytics';
import { pricingFlaky15Module } from '@ci/pricing-flaky-15';
import { pricing06Module } from '@ci/pricing-06';

export const pricingSlow16Module: ModuleInfo = defineModule({
  name: '@ci/pricing-slow-16',
  layer: 'modules',
  deps: [utilsModule, paymentsModule, analyticsModule, pricingFlaky15Module, pricing06Module],
});

export function describePricingSlow16(): string {
  return describeModule(pricingSlow16Module);
}
