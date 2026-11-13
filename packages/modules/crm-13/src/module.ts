import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { queueModule } from '@ci/queue';
import { recommendationsModule } from '@ci/recommendations';
import { crmMem09Module } from '@ci/crm-mem-09';

export const crm13Module: ModuleInfo = defineModule({
  name: '@ci/crm-13',
  layer: 'modules',
  deps: [utilsModule, queueModule, recommendationsModule, crmMem09Module],
});

export function describeCrm13(): string {
  return describeModule(crm13Module);
}
