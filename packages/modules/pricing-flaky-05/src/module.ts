import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { shippingModule } from '@ci/shipping';
import { reportsModule } from '@ci/reports';
import { pricingSlow04Module } from '@ci/pricing-slow-04';

export const pricingFlaky05Module: ModuleInfo = defineModule({
  name: '@ci/pricing-flaky-05',
  layer: 'modules',
  deps: [utilsModule, usersModule, shippingModule, reportsModule, pricingSlow04Module],
});

export function describePricingFlaky05(): string {
  return describeModule(pricingFlaky05Module);
}
