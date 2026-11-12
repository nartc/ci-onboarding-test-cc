import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { fulfillment01Module } from '@ci/fulfillment-01';
import { fulfillment02Module } from '@ci/fulfillment-02';
import { fulfillment03Module } from '@ci/fulfillment-03';
import { fulfillmentSlow04Module } from '@ci/fulfillment-slow-04';
import { fulfillmentFlaky05Module } from '@ci/fulfillment-flaky-05';
import { fulfillment06Module } from '@ci/fulfillment-06';
import { fulfillmentCpu07Module } from '@ci/fulfillment-cpu-07';
import { fulfillmentSlow08Module } from '@ci/fulfillment-slow-08';
import { fulfillmentMem09Module } from '@ci/fulfillment-mem-09';
import { fulfillment10Module } from '@ci/fulfillment-10';
import { fulfillment11Module } from '@ci/fulfillment-11';
import { fulfillmentSlow12Module } from '@ci/fulfillment-slow-12';
import { fulfillment13Module } from '@ci/fulfillment-13';
import { fulfillmentCpu14Module } from '@ci/fulfillment-cpu-14';
import { fulfillmentFlaky15Module } from '@ci/fulfillment-flaky-15';
import { fulfillmentSlow16Module } from '@ci/fulfillment-slow-16';
import { fulfillment17Module } from '@ci/fulfillment-17';
import { fulfillmentMem18Module } from '@ci/fulfillment-mem-18';
import { fulfillment19Module } from '@ci/fulfillment-19';
import { fulfillmentSlow20Module } from '@ci/fulfillment-slow-20';

export const fulfillmentModule: ModuleInfo = defineModule({
  name: '@ci/fulfillment',
  layer: 'modules',
  deps: [
    utilsModule,
    fulfillment01Module,
    fulfillment02Module,
    fulfillment03Module,
    fulfillmentSlow04Module,
    fulfillmentFlaky05Module,
    fulfillment06Module,
    fulfillmentCpu07Module,
    fulfillmentSlow08Module,
    fulfillmentMem09Module,
    fulfillment10Module,
    fulfillment11Module,
    fulfillmentSlow12Module,
    fulfillment13Module,
    fulfillmentCpu14Module,
    fulfillmentFlaky15Module,
    fulfillmentSlow16Module,
    fulfillment17Module,
    fulfillmentMem18Module,
    fulfillment19Module,
    fulfillmentSlow20Module,
  ],
});

export function describeFulfillment(): string {
  return describeModule(fulfillmentModule);
}
