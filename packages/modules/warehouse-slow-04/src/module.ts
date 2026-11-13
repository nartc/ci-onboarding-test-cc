import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { eventsModule } from '@ci/events';
import { warehouse03Module } from '@ci/warehouse-03';
import { warehouse02Module } from '@ci/warehouse-02';
import { support03Module } from '@ci/support-03';

export const warehouseSlow04Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-slow-04',
  layer: 'modules',
  deps: [utilsModule, eventsModule, warehouse03Module, warehouse02Module, support03Module],
});

export function describeWarehouseSlow04(): string {
  return describeModule(warehouseSlow04Module);
}
