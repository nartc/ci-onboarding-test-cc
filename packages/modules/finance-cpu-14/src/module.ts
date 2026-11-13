import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { analyticsModule } from '@ci/analytics';
import { auditModule } from '@ci/audit';

export const financeCpu14Module: ModuleInfo = defineModule({
  name: '@ci/finance-cpu-14',
  layer: 'modules',
  deps: [utilsModule, usersModule, analyticsModule, auditModule],
});

export function describeFinanceCpu14(): string {
  return describeModule(financeCpu14Module);
}
