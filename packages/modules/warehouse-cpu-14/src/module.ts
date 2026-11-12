import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { metricsModule } from '@ci/metrics';
import { dbModule } from '@ci/db';
import { warehouse13Module } from '@ci/warehouse-13';
import { warehouseCpu07Module } from '@ci/warehouse-cpu-07';

export const warehouseCpu14Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-cpu-14',
  layer: 'modules',
  deps: [utilsModule, metricsModule, dbModule, warehouse13Module, warehouseCpu07Module],
});

export function describeWarehouseCpu14(): string {
  return describeModule(warehouseCpu14Module);
}
