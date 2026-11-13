import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { notificationsModule } from '@ci/notifications';
import { financeSlow04Module } from '@ci/finance-slow-04';

export const financeFlaky15Module: ModuleInfo = defineModule({
  name: '@ci/finance-flaky-15',
  layer: 'modules',
  deps: [utilsModule, notificationsModule, financeSlow04Module],
});

export function describeFinanceFlaky15(): string {
  return describeModule(financeFlaky15Module);
}
