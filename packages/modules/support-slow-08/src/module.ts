import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { shippingModule } from '@ci/shipping';
import { supportCpu07Module } from '@ci/support-cpu-07';
import { supportSlow04Module } from '@ci/support-slow-04';
import { pricingFlaky15Module } from '@ci/pricing-flaky-15';

export const supportSlow08Module: ModuleInfo = defineModule({
  name: '@ci/support-slow-08',
  layer: 'modules',
  deps: [
    utilsModule,
    shippingModule,
    supportCpu07Module,
    supportSlow04Module,
    pricingFlaky15Module,
  ],
});

export function describeSupportSlow08(): string {
  return describeModule(supportSlow08Module);
}
