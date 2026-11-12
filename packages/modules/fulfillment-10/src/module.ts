import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { reportsModule } from '@ci/reports';
import { paymentsModule } from '@ci/payments';
import { fulfillmentMem09Module } from '@ci/fulfillment-mem-09';

export const fulfillment10Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-10',
  layer: 'modules',
  deps: [utilsModule, reportsModule, paymentsModule, fulfillmentMem09Module],
});

export function describeFulfillment10(): string {
  return describeModule(fulfillment10Module);
}
