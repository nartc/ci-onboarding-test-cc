import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { searchModule } from '@ci/search';
import { pricing06Module } from '@ci/pricing-06';
import { pricing01Module } from '@ci/pricing-01';

export const pricingCpu07Module: ModuleInfo = defineModule({
  name: '@ci/pricing-cpu-07',
  layer: 'modules',
  deps: [utilsModule, searchModule, pricing06Module, pricing01Module],
});

export function describePricingCpu07(): string {
  return describeModule(pricingCpu07Module);
}
