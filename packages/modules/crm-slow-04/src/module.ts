import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { authModule } from '@ci/auth';
import { crm03Module } from '@ci/crm-03';

export const crmSlow04Module: ModuleInfo = defineModule({
  name: '@ci/crm-slow-04',
  layer: 'modules',
  deps: [utilsModule, authModule, crm03Module],
});

export function describeCrmSlow04(): string {
  return describeModule(crmSlow04Module);
}
