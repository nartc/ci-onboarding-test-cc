import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { shippingModule } from '@ci/shipping';
import { auditModule } from '@ci/audit';

export const crm02Module: ModuleInfo = defineModule({
  name: '@ci/crm-02',
  layer: 'modules',
  deps: [utilsModule, shippingModule, auditModule],
});

export function describeCrm02(): string {
  return describeModule(crm02Module);
}
