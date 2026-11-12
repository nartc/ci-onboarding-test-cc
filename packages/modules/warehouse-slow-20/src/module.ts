import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { eventsModule } from '@ci/events';
import { shippingModule } from '@ci/shipping';
import { billingModule } from '@ci/billing';
import { warehouse19Module } from '@ci/warehouse-19';

export const warehouseSlow20Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-slow-20',
  layer: 'modules',
  deps: [utilsModule, eventsModule, shippingModule, billingModule, warehouse19Module],
});

export function describeWarehouseSlow20(): string {
  return describeModule(warehouseSlow20Module);
}
