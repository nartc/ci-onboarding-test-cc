import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { pricingSlow08Module } from '@ci/pricing-slow-08';
import { marketing06Module } from '@ci/marketing-06';

export const pricingMem09Module: ModuleInfo = defineModule({
  name: '@ci/pricing-mem-09',
  layer: 'modules',
  deps: [utilsModule, usersModule, pricingSlow08Module, marketing06Module],
});

export function describePricingMem09(): string {
  return describeModule(pricingMem09Module);
}
