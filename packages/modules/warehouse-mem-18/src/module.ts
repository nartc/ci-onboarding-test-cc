import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { storageModule } from '@ci/storage';
import { usersModule } from '@ci/users';
import { auditModule } from '@ci/audit';
import { warehouse17Module } from '@ci/warehouse-17';
import { warehouse10Module } from '@ci/warehouse-10';

export const warehouseMem18Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-mem-18',
  layer: 'modules',
  deps: [
    utilsModule,
    storageModule,
    usersModule,
    auditModule,
    warehouse17Module,
    warehouse10Module,
  ],
});

export function describeWarehouseMem18(): string {
  return describeModule(warehouseMem18Module);
}
