import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { billingModule } from '@ci/billing';
import { recommendationsModule } from '@ci/recommendations';
import { usersModule } from '@ci/users';
import { crm11Module } from '@ci/crm-11';
import { crm10Module } from '@ci/crm-10';

export const crmSlow12Module: ModuleInfo = defineModule({
  name: '@ci/crm-slow-12',
  layer: 'modules',
  deps: [utilsModule, billingModule, recommendationsModule, usersModule, crm11Module, crm10Module],
});

export function describeCrmSlow12(): string {
  return describeModule(crmSlow12Module);
}
