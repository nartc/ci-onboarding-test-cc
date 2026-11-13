import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { notificationsModule } from '@ci/notifications';
import { dbModule } from '@ci/db';
import { paymentsModule } from '@ci/payments';

export const marketing19Module: ModuleInfo = defineModule({
  name: '@ci/marketing-19',
  layer: 'modules',
  deps: [utilsModule, notificationsModule, dbModule, paymentsModule],
});

export function describeMarketing19(): string {
  return describeModule(marketing19Module);
}
