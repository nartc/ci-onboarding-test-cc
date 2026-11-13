import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { auditModule } from '@ci/audit';

export const identity10Module: ModuleInfo = defineModule({
  name: '@ci/identity-10',
  layer: 'modules',
  deps: [utilsModule, auditModule],
});

export function describeIdentity10(): string {
  return describeModule(identity10Module);
}
