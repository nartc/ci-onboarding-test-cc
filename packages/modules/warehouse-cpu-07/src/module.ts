import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { analyticsModule } from '@ci/analytics';
import { usersModule } from '@ci/users';
import { searchModule } from '@ci/search';
import { warehouse06Module } from '@ci/warehouse-06';
import { supportSlow12Module } from '@ci/support-slow-12';

export const warehouseCpu07Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-cpu-07',
  layer: 'modules',
  deps: [
    utilsModule,
    analyticsModule,
    usersModule,
    searchModule,
    warehouse06Module,
    supportSlow12Module,
  ],
});

export function describeWarehouseCpu07(): string {
  return describeModule(warehouseCpu07Module);
}
