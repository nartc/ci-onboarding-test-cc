import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { tracingModule } from '@ci/tracing';
import { checkout02Module } from '@ci/checkout-02';

export const checkoutMem18Module: ModuleInfo = defineModule({
  name: '@ci/checkout-mem-18',
  layer: 'modules',
  deps: [utilsModule, tracingModule, checkout02Module],
});

export function describeCheckoutMem18(): string {
  return describeModule(checkoutMem18Module);
}
