import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { billingModule } from '@ci/billing';
import { warehouse06Module } from '@ci/warehouse-06';

export const warehouse10Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-10',
  layer: 'modules',
  deps: [utilsModule, billingModule, warehouse06Module],
});

export function describeWarehouse10(): string {
  return describeModule(warehouse10Module);
}
