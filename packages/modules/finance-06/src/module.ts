import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { metricsModule } from '@ci/metrics';
import { billingModule } from '@ci/billing';
import { ordersModule } from '@ci/orders';
import { financeFlaky05Module } from '@ci/finance-flaky-05';

export const finance06Module: ModuleInfo = defineModule({
  name: '@ci/finance-06',
  layer: 'modules',
  deps: [utilsModule, metricsModule, billingModule, ordersModule, financeFlaky05Module],
});

export function describeFinance06(): string {
  return describeModule(finance06Module);
}
