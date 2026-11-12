import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { featureFlagsModule } from '@ci/feature-flags';
import { usersModule } from '@ci/users';

export const warehouse06Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-06',
  layer: 'modules',
  deps: [utilsModule, featureFlagsModule, usersModule],
});

export function describeWarehouse06(): string {
  return describeModule(warehouse06Module);
}
