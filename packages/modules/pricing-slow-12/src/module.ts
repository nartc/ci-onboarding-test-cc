import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { inventoryModule } from '@ci/inventory';
import { loggerModule } from '@ci/logger';
import { queueModule } from '@ci/queue';
import { pricing11Module } from '@ci/pricing-11';
import { pricing03Module } from '@ci/pricing-03';

export const pricingSlow12Module: ModuleInfo = defineModule({
  name: '@ci/pricing-slow-12',
  layer: 'modules',
  deps: [utilsModule, inventoryModule, loggerModule, queueModule, pricing11Module, pricing03Module],
});

export function describePricingSlow12(): string {
  return describeModule(pricingSlow12Module);
}
