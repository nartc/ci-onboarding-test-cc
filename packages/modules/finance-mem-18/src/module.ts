import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { paymentsModule } from '@ci/payments';
import { authModule } from '@ci/auth';
import { finance17Module } from '@ci/finance-17';

export const financeMem18Module: ModuleInfo = defineModule({
  name: '@ci/finance-mem-18',
  layer: 'modules',
  deps: [utilsModule, paymentsModule, authModule, finance17Module],
});

export function describeFinanceMem18(): string {
  return describeModule(financeMem18Module);
}
