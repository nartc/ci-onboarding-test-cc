import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { searchModule } from '@ci/search';
import { crmFlaky05Module } from '@ci/crm-flaky-05';
import { crm02Module } from '@ci/crm-02';

export const crm06Module: ModuleInfo = defineModule({
  name: '@ci/crm-06',
  layer: 'modules',
  deps: [utilsModule, searchModule, crmFlaky05Module, crm02Module],
});

export function describeCrm06(): string {
  return describeModule(crm06Module);
}
