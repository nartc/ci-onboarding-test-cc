import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { recommendationsModule } from '@ci/recommendations';
import { paymentsModule } from '@ci/payments';
import { pricingCpu07Module } from '@ci/pricing-cpu-07';

export const pricingSlow08Module: ModuleInfo = defineModule({
  name: '@ci/pricing-slow-08',
  layer: 'modules',
  deps: [utilsModule, recommendationsModule, paymentsModule, pricingCpu07Module],
});

export function describePricingSlow08(): string {
  return describeModule(pricingSlow08Module);
}
