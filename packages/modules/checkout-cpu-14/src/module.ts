import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { errorsModule } from '@ci/errors';
import { httpModule } from '@ci/http';
import { recommendationsModule } from '@ci/recommendations';
import { checkout13Module } from '@ci/checkout-13';
import { checkoutMem09Module } from '@ci/checkout-mem-09';

export const checkoutCpu14Module: ModuleInfo = defineModule({
  name: '@ci/checkout-cpu-14',
  layer: 'modules',
  deps: [
    utilsModule,
    errorsModule,
    httpModule,
    recommendationsModule,
    checkout13Module,
    checkoutMem09Module,
  ],
});

export function describeCheckoutCpu14(): string {
  return describeModule(checkoutCpu14Module);
}
