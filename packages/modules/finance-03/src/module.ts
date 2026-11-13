import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { finance02Module } from '@ci/finance-02';

export const finance03Module: ModuleInfo = defineModule({
  name: '@ci/finance-03',
  layer: 'modules',
  deps: [utilsModule, usersModule, finance02Module],
});

export function describeFinance03(): string {
  return describeModule(finance03Module);
}
