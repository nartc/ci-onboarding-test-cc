import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { queueModule } from '@ci/queue';
import { crmMem09Module } from '@ci/crm-mem-09';
import { crmFlaky05Module } from '@ci/crm-flaky-05';

export const crm10Module: ModuleInfo = defineModule({
  name: '@ci/crm-10',
  layer: 'modules',
  deps: [utilsModule, queueModule, crmMem09Module, crmFlaky05Module],
});

export function describeCrm10(): string {
  return describeModule(crm10Module);
}
