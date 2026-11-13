import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { warehouseCpu14Module } from '@ci/warehouse-cpu-14';
import { supportFlaky15Module } from '@ci/support-flaky-15';

export const warehouseFlaky15Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-flaky-15',
  layer: 'modules',
  deps: [utilsModule, usersModule, warehouseCpu14Module, supportFlaky15Module],
});

export function describeWarehouseFlaky15(): string {
  return describeModule(warehouseFlaky15Module);
}
