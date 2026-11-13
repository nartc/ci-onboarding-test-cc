import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { reportsModule } from '@ci/reports';
import { paymentsModule } from '@ci/payments';
import { configModule } from '@ci/config';
import { supportSlow12Module } from '@ci/support-slow-12';

export const support13Module: ModuleInfo = defineModule({
  name: '@ci/support-13',
  layer: 'modules',
  deps: [utilsModule, reportsModule, paymentsModule, configModule, supportSlow12Module],
});

export function describeSupport13(): string {
  return describeModule(support13Module);
}
