import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { ordersModule } from '@ci/orders';
import { inventoryModule } from '@ci/inventory';
import { dateModule } from '@ci/date';
import { queueModule } from '@ci/queue';

export const shippingModule: ModuleInfo = defineModule({
  name: '@ci/shipping',
  layer: 'features',
  deps: [utilsModule, ordersModule, inventoryModule, dateModule, queueModule],
});

export function describeShipping(): string {
  return describeModule(shippingModule);
}
