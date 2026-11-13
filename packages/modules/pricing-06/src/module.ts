import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { analyticsModule } from '@ci/analytics';
import { recommendationsModule } from '@ci/recommendations';
import { paymentsModule } from '@ci/payments';
import { pricing01Module } from '@ci/pricing-01';
import { marketingCpu14Module } from '@ci/marketing-cpu-14';

export const pricing06Module: ModuleInfo = defineModule({
  name: '@ci/pricing-06',
  layer: 'modules',
  deps: [
    utilsModule,
    analyticsModule,
    recommendationsModule,
    paymentsModule,
    pricing01Module,
    marketingCpu14Module,
  ],
});

export function describePricing06(): string {
  return describeModule(pricing06Module);
}
