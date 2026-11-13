import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { billingModule } from '@ci/billing';
import { crm06Module } from '@ci/crm-06';

export const crmCpu07Module: ModuleInfo = defineModule({
  name: '@ci/crm-cpu-07',
  layer: 'modules',
  deps: [utilsModule, billingModule, crm06Module],
});

export function describeCrmCpu07(): string {
  return describeModule(crmCpu07Module);
}
