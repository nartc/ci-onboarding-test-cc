import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { paymentsModule } from '@ci/payments';
import { support01Module } from '@ci/support-01';

export const support02Module: ModuleInfo = defineModule({
  name: '@ci/support-02',
  layer: 'modules',
  deps: [utilsModule, paymentsModule, support01Module],
});

export function describeSupport02(): string {
  return describeModule(support02Module);
}
