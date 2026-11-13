import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { auditModule } from '@ci/audit';

export const crm19Module: ModuleInfo = defineModule({
  name: '@ci/crm-19',
  layer: 'modules',
  deps: [utilsModule, auditModule],
});

export function describeCrm19(): string {
  return describeModule(crm19Module);
}
