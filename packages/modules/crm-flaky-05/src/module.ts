import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { reportsModule } from '@ci/reports';
import { crmSlow04Module } from '@ci/crm-slow-04';
import { crm01Module } from '@ci/crm-01';
import { checkout10Module } from '@ci/checkout-10';

export const crmFlaky05Module: ModuleInfo = defineModule({
  name: '@ci/crm-flaky-05',
  layer: 'modules',
  deps: [utilsModule, reportsModule, crmSlow04Module, crm01Module, checkout10Module],
});

export function describeCrmFlaky05(): string {
  return describeModule(crmFlaky05Module);
}
