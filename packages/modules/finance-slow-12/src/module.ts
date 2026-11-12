import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { paymentsModule } from '@ci/payments';
import { searchModule } from '@ci/search';
import { crmSlow08Module } from '@ci/crm-slow-08';

export const financeSlow12Module: ModuleInfo = defineModule({
  name: '@ci/finance-slow-12',
  layer: 'modules',
  deps: [utilsModule, paymentsModule, searchModule, crmSlow08Module],
});

export function describeFinanceSlow12(): string {
  return describeModule(financeSlow12Module);
}
