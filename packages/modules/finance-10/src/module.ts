import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { storageModule } from '@ci/storage';
import { financeSlow08Module } from '@ci/finance-slow-08';
import { crmMem09Module } from '@ci/crm-mem-09';

export const finance10Module: ModuleInfo = defineModule({
  name: '@ci/finance-10',
  layer: 'modules',
  deps: [utilsModule, storageModule, financeSlow08Module, crmMem09Module],
});

export function describeFinance10(): string {
  return describeModule(finance10Module);
}
