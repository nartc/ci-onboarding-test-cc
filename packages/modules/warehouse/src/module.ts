import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { warehouse01Module } from '@ci/warehouse-01';
import { warehouse02Module } from '@ci/warehouse-02';
import { warehouse03Module } from '@ci/warehouse-03';
import { warehouseSlow04Module } from '@ci/warehouse-slow-04';
import { warehouseFlaky05Module } from '@ci/warehouse-flaky-05';
import { warehouse06Module } from '@ci/warehouse-06';
import { warehouseCpu07Module } from '@ci/warehouse-cpu-07';
import { warehouseSlow08Module } from '@ci/warehouse-slow-08';
import { warehouseMem09Module } from '@ci/warehouse-mem-09';
import { warehouse10Module } from '@ci/warehouse-10';
import { warehouse11Module } from '@ci/warehouse-11';
import { warehouseSlow12Module } from '@ci/warehouse-slow-12';
import { warehouse13Module } from '@ci/warehouse-13';
import { warehouseCpu14Module } from '@ci/warehouse-cpu-14';
import { warehouseFlaky15Module } from '@ci/warehouse-flaky-15';
import { warehouseSlow16Module } from '@ci/warehouse-slow-16';
import { warehouse17Module } from '@ci/warehouse-17';
import { warehouseMem18Module } from '@ci/warehouse-mem-18';
import { warehouse19Module } from '@ci/warehouse-19';
import { warehouseSlow20Module } from '@ci/warehouse-slow-20';

export const warehouseModule: ModuleInfo = defineModule({
  name: '@ci/warehouse',
  layer: 'modules',
  deps: [
    utilsModule,
    warehouse01Module,
    warehouse02Module,
    warehouse03Module,
    warehouseSlow04Module,
    warehouseFlaky05Module,
    warehouse06Module,
    warehouseCpu07Module,
    warehouseSlow08Module,
    warehouseMem09Module,
    warehouse10Module,
    warehouse11Module,
    warehouseSlow12Module,
    warehouse13Module,
    warehouseCpu14Module,
    warehouseFlaky15Module,
    warehouseSlow16Module,
    warehouse17Module,
    warehouseMem18Module,
    warehouse19Module,
    warehouseSlow20Module,
  ],
});

export function describeWarehouse(): string {
  return describeModule(warehouseModule);
}
