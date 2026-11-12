import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { auditModule } from '@ci/audit';

export const marketing06Module: ModuleInfo = defineModule({
  name: '@ci/marketing-06',
  layer: 'modules',
  deps: [utilsModule, auditModule],
});

export function describeMarketing06(): string {
  return describeModule(marketing06Module);
}
