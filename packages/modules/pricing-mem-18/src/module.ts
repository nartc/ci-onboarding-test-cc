import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { reportsModule } from '@ci/reports';
import { usersModule } from '@ci/users';
import { pricingFlaky15Module } from '@ci/pricing-flaky-15';

export const pricingMem18Module: ModuleInfo = defineModule({
  name: '@ci/pricing-mem-18',
  layer: 'modules',
  deps: [utilsModule, reportsModule, usersModule, pricingFlaky15Module],
});

export function describePricingMem18(): string {
  return describeModule(pricingMem18Module);
}
