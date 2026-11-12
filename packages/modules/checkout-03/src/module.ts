import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { cacheModule } from '@ci/cache';

export const checkout03Module: ModuleInfo = defineModule({
  name: '@ci/checkout-03',
  layer: 'modules',
  deps: [utilsModule, cacheModule],
});

export function describeCheckout03(): string {
  return describeModule(checkout03Module);
}
