import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { cacheModule } from '@ci/cache';

export const fulfillment02Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-02',
  layer: 'modules',
  deps: [utilsModule, cacheModule],
});

export function describeFulfillment02(): string {
  return describeModule(fulfillment02Module);
}
