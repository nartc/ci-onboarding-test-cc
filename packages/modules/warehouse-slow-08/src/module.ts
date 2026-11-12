import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { paymentsModule } from '@ci/payments';
import { i18nModule } from '@ci/i18n';
import { warehouseCpu07Module } from '@ci/warehouse-cpu-07';

export const warehouseSlow08Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-slow-08',
  layer: 'modules',
  deps: [utilsModule, paymentsModule, i18nModule, warehouseCpu07Module],
});

export function describeWarehouseSlow08(): string {
  return describeModule(warehouseSlow08Module);
}
