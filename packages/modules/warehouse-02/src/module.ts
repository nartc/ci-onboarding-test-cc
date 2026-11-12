import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { ordersModule } from '@ci/orders';
import { paymentsModule } from '@ci/payments';
import { recommendationsModule } from '@ci/recommendations';
import { supportSlow12Module } from '@ci/support-slow-12';

export const warehouse02Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-02',
  layer: 'modules',
  deps: [utilsModule, ordersModule, paymentsModule, recommendationsModule, supportSlow12Module],
});

export function describeWarehouse02(): string {
  return describeModule(warehouse02Module);
}
