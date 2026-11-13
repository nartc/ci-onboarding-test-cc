import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { metricsModule } from '@ci/metrics';
import { crm13Module } from '@ci/crm-13';
import { crm01Module } from '@ci/crm-01';

export const crmCpu14Module: ModuleInfo = defineModule({
  name: '@ci/crm-cpu-14',
  layer: 'modules',
  deps: [utilsModule, metricsModule, crm13Module, crm01Module],
});

export function describeCrmCpu14(): string {
  return describeModule(crmCpu14Module);
}
