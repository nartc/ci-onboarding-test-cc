import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { dbModule } from '@ci/db';
import { reportsModule } from '@ci/reports';
import { auditModule } from '@ci/audit';
import { fulfillment13Module } from '@ci/fulfillment-13';

export const fulfillmentCpu14Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-cpu-14',
  layer: 'modules',
  deps: [utilsModule, dbModule, reportsModule, auditModule, fulfillment13Module],
});

export function describeFulfillmentCpu14(): string {
  return describeModule(fulfillmentCpu14Module);
}
