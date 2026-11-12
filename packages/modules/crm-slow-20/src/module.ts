import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { searchModule } from '@ci/search';
import { inventoryModule } from '@ci/inventory';
import { checkout01Module } from '@ci/checkout-01';

export const crmSlow20Module: ModuleInfo = defineModule({
  name: '@ci/crm-slow-20',
  layer: 'modules',
  deps: [utilsModule, searchModule, inventoryModule, checkout01Module],
});

export function describeCrmSlow20(): string {
  return describeModule(crmSlow20Module);
}
