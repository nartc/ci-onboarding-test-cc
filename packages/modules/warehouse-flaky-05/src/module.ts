import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { queueModule } from '@ci/queue';
import { inventoryModule } from '@ci/inventory';
import { billingModule } from '@ci/billing';

export const warehouseFlaky05Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-flaky-05',
  layer: 'modules',
  deps: [utilsModule, queueModule, inventoryModule, billingModule],
});

export function describeWarehouseFlaky05(): string {
  return describeModule(warehouseFlaky05Module);
}
