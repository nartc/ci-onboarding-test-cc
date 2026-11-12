import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { inventoryModule } from '@ci/inventory';
import { tracingModule } from '@ci/tracing';
import { shippingModule } from '@ci/shipping';
import { warehouse02Module } from '@ci/warehouse-02';

export const warehouse03Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-03',
  layer: 'modules',
  deps: [utilsModule, inventoryModule, tracingModule, shippingModule, warehouse02Module],
});

export function describeWarehouse03(): string {
  return describeModule(warehouse03Module);
}
