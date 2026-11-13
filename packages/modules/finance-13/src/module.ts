import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { financeSlow12Module } from '@ci/finance-slow-12';
import { finance02Module } from '@ci/finance-02';

export const finance13Module: ModuleInfo = defineModule({
  name: '@ci/finance-13',
  layer: 'modules',
  deps: [utilsModule, usersModule, financeSlow12Module, finance02Module],
});

export function describeFinance13(): string {
  return describeModule(finance13Module);
}
