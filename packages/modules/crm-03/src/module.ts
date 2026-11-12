import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { auditModule } from '@ci/audit';
import { crm02Module } from '@ci/crm-02';
import { checkoutFlaky05Module } from '@ci/checkout-flaky-05';

export const crm03Module: ModuleInfo = defineModule({
  name: '@ci/crm-03',
  layer: 'modules',
  deps: [utilsModule, auditModule, crm02Module, checkoutFlaky05Module],
});

export function describeCrm03(): string {
  return describeModule(crm03Module);
}
