import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { featureFlagsModule } from '@ci/feature-flags';
import { authModule } from '@ci/auth';
import { checkout02Module } from '@ci/checkout-02';

export const checkoutCpu07Module: ModuleInfo = defineModule({
  name: '@ci/checkout-cpu-07',
  layer: 'modules',
  deps: [utilsModule, featureFlagsModule, authModule, checkout02Module],
});

export function describeCheckoutCpu07(): string {
  return describeModule(checkoutCpu07Module);
}
