import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { featureFlagsModule } from '@ci/feature-flags';
import { pricingCpu14Module } from '@ci/pricing-cpu-14';
import { pricing13Module } from '@ci/pricing-13';

export const pricingFlaky15Module: ModuleInfo = defineModule({
  name: '@ci/pricing-flaky-15',
  layer: 'modules',
  deps: [utilsModule, featureFlagsModule, pricingCpu14Module, pricing13Module],
});

export function describePricingFlaky15(): string {
  return describeModule(pricingFlaky15Module);
}
