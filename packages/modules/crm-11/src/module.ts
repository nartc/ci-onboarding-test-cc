import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { dbModule } from '@ci/db';
import { inventoryModule } from '@ci/inventory';
import { auditModule } from '@ci/audit';

export const crm11Module: ModuleInfo = defineModule({
  name: '@ci/crm-11',
  layer: 'modules',
  deps: [utilsModule, dbModule, inventoryModule, auditModule],
});

export function describeCrm11(): string {
  return describeModule(crm11Module);
}
