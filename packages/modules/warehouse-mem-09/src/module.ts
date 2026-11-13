import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { reportsModule } from '@ci/reports';
import { usersModule } from '@ci/users';

export const warehouseMem09Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-mem-09',
  layer: 'modules',
  deps: [utilsModule, reportsModule, usersModule],
});

export function describeWarehouseMem09(): string {
  return describeModule(warehouseMem09Module);
}
