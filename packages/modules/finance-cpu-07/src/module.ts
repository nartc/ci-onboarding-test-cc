import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { queueModule } from '@ci/queue';
import { notificationsModule } from '@ci/notifications';
import { usersModule } from '@ci/users';
import { finance06Module } from '@ci/finance-06';

export const financeCpu07Module: ModuleInfo = defineModule({
  name: '@ci/finance-cpu-07',
  layer: 'modules',
  deps: [utilsModule, queueModule, notificationsModule, usersModule, finance06Module],
});

export function describeFinanceCpu07(): string {
  return describeModule(financeCpu07Module);
}
