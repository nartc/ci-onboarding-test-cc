import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { shippingModule } from '@ci/shipping';
import { inventoryModule } from '@ci/inventory';

export const marketing01Module: ModuleInfo = defineModule({
  name: '@ci/marketing-01',
  layer: 'modules',
  deps: [utilsModule, shippingModule, inventoryModule],
});

export function describeMarketing01(): string {
  return describeModule(marketing01Module);
}
