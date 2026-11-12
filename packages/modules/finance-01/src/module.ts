import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { auditModule } from '@ci/audit';
import { notificationsModule } from '@ci/notifications';
import { usersModule } from '@ci/users';

export const finance01Module: ModuleInfo = defineModule({
  name: '@ci/finance-01',
  layer: 'modules',
  deps: [utilsModule, auditModule, notificationsModule, usersModule],
});

export function describeFinance01(): string {
  return describeModule(finance01Module);
}
