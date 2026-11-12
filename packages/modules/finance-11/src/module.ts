import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { analyticsModule } from '@ci/analytics';
import { inventoryModule } from '@ci/inventory';
import { finance10Module } from '@ci/finance-10';
import { financeSlow08Module } from '@ci/finance-slow-08';
import { crm10Module } from '@ci/crm-10';

export const finance11Module: ModuleInfo = defineModule({
  name: '@ci/finance-11',
  layer: 'modules',
  deps: [
    utilsModule,
    analyticsModule,
    inventoryModule,
    finance10Module,
    financeSlow08Module,
    crm10Module,
  ],
});

export function describeFinance11(): string {
  return describeModule(finance11Module);
}
