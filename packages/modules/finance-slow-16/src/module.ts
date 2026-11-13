import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { billingModule } from '@ci/billing';
import { loggerModule } from '@ci/logger';
import { financeFlaky15Module } from '@ci/finance-flaky-15';
import { finance06Module } from '@ci/finance-06';
import { crm13Module } from '@ci/crm-13';

export const financeSlow16Module: ModuleInfo = defineModule({
  name: '@ci/finance-slow-16',
  layer: 'modules',
  deps: [
    utilsModule,
    billingModule,
    loggerModule,
    financeFlaky15Module,
    finance06Module,
    crm13Module,
  ],
});

export function describeFinanceSlow16(): string {
  return describeModule(financeSlow16Module);
}
