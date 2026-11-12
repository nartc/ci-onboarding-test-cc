import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { inventoryModule } from '@ci/inventory';
import { billingModule } from '@ci/billing';
import { queueModule } from '@ci/queue';
import { schemaModule } from '@ci/schema';

export const ordersModule: ModuleInfo = defineModule({
  name: '@ci/orders',
  layer: 'features',
  deps: [utilsModule, usersModule, inventoryModule, billingModule, queueModule, schemaModule],
});

export function describeOrders(): string {
  return describeModule(ordersModule);
}
