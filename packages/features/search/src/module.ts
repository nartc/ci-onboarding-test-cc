import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { inventoryModule } from '@ci/inventory';
import { ordersModule } from '@ci/orders';
import { cacheModule } from '@ci/cache';

export const searchModule: ModuleInfo = defineModule({
  name: '@ci/search',
  layer: 'features',
  deps: [utilsModule, inventoryModule, ordersModule, cacheModule],
});

export function describeSearch(): string {
  return describeModule(searchModule);
}
