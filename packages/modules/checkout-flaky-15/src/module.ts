import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { serializerModule } from '@ci/serializer';
import { cryptoModule } from '@ci/crypto';
import { checkoutCpu14Module } from '@ci/checkout-cpu-14';

export const checkoutFlaky15Module: ModuleInfo = defineModule({
  name: '@ci/checkout-flaky-15',
  layer: 'modules',
  deps: [utilsModule, serializerModule, cryptoModule, checkoutCpu14Module],
});

export function describeCheckoutFlaky15(): string {
  return describeModule(checkoutFlaky15Module);
}
