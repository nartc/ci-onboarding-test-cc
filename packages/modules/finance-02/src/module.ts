import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { shippingModule } from '@ci/shipping';
import { featureFlagsModule } from '@ci/feature-flags';
import { usersModule } from '@ci/users';
import { finance01Module } from '@ci/finance-01';

export const finance02Module: ModuleInfo = defineModule({
  name: '@ci/finance-02',
  layer: 'modules',
  deps: [utilsModule, shippingModule, featureFlagsModule, usersModule, finance01Module],
});

export function describeFinance02(): string {
  return describeModule(finance02Module);
}
