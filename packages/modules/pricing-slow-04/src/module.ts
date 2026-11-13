import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { shippingModule } from '@ci/shipping';
import { usersModule } from '@ci/users';
import { analyticsModule } from '@ci/analytics';

export const pricingSlow04Module: ModuleInfo = defineModule({
  name: '@ci/pricing-slow-04',
  layer: 'modules',
  deps: [utilsModule, shippingModule, usersModule, analyticsModule],
});

export function describePricingSlow04(): string {
  return describeModule(pricingSlow04Module);
}
