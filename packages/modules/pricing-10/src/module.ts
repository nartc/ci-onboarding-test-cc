import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { analyticsModule } from '@ci/analytics';
import { pricingMem09Module } from '@ci/pricing-mem-09';

export const pricing10Module: ModuleInfo = defineModule({
  name: '@ci/pricing-10',
  layer: 'modules',
  deps: [utilsModule, analyticsModule, pricingMem09Module],
});

export function describePricing10(): string {
  return describeModule(pricing10Module);
}
