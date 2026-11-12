import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { metricsModule } from '@ci/metrics';
import { warehouse11Module } from '@ci/warehouse-11';

export const warehouseSlow12Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-slow-12',
  layer: 'modules',
  deps: [utilsModule, metricsModule, warehouse11Module],
});

export function describeWarehouseSlow12(): string {
  return describeModule(warehouseSlow12Module);
}
