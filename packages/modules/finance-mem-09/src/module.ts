import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { analyticsModule } from '@ci/analytics';
import { notificationsModule } from '@ci/notifications';

export const financeMem09Module: ModuleInfo = defineModule({
  name: '@ci/finance-mem-09',
  layer: 'modules',
  deps: [utilsModule, analyticsModule, notificationsModule],
});

export function describeFinanceMem09(): string {
  return describeModule(financeMem09Module);
}
