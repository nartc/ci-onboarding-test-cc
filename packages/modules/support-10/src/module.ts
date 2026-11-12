import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { paymentsModule } from '@ci/payments';
import { supportMem09Module } from '@ci/support-mem-09';
import { support01Module } from '@ci/support-01';
import { pricingCpu07Module } from '@ci/pricing-cpu-07';

export const support10Module: ModuleInfo = defineModule({
  name: '@ci/support-10',
  layer: 'modules',
  deps: [utilsModule, paymentsModule, supportMem09Module, support01Module, pricingCpu07Module],
});

export function describeSupport10(): string {
  return describeModule(support10Module);
}
