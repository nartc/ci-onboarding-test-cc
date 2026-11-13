import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';

export const fulfillment01Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-01',
  layer: 'modules',
  deps: [utilsModule, usersModule],
});

export function describeFulfillment01(): string {
  return describeModule(fulfillment01Module);
}
