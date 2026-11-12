import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { schemaModule } from '@ci/schema';
import { eventsModule } from '@ci/events';
import { warehouseFlaky15Module } from '@ci/warehouse-flaky-15';

export const warehouseSlow16Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-slow-16',
  layer: 'modules',
  deps: [utilsModule, schemaModule, eventsModule, warehouseFlaky15Module],
});

export function describeWarehouseSlow16(): string {
  return describeModule(warehouseSlow16Module);
}
