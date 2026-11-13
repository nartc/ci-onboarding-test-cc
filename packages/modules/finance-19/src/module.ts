import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { serializerModule } from '@ci/serializer';
import { billingModule } from '@ci/billing';
import { reportsModule } from '@ci/reports';

export const finance19Module: ModuleInfo = defineModule({
  name: '@ci/finance-19',
  layer: 'modules',
  deps: [utilsModule, serializerModule, billingModule, reportsModule],
});

export function describeFinance19(): string {
  return describeModule(finance19Module);
}
