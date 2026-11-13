import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { inventoryModule } from '@ci/inventory';
import { cacheModule } from '@ci/cache';
import { pricingCpu07Module } from '@ci/pricing-cpu-07';

export const supportMem09Module: ModuleInfo = defineModule({
  name: '@ci/support-mem-09',
  layer: 'modules',
  deps: [utilsModule, inventoryModule, cacheModule, pricingCpu07Module],
});

export function describeSupportMem09(): string {
  return describeModule(supportMem09Module);
}
