import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { metricsModule } from '@ci/metrics';
import { analyticsModule } from '@ci/analytics';
import { crm17Module } from '@ci/crm-17';
import { crmSlow04Module } from '@ci/crm-slow-04';

export const crmMem18Module: ModuleInfo = defineModule({
  name: '@ci/crm-mem-18',
  layer: 'modules',
  deps: [utilsModule, metricsModule, analyticsModule, crm17Module, crmSlow04Module],
});

export function describeCrmMem18(): string {
  return describeModule(crmMem18Module);
}
