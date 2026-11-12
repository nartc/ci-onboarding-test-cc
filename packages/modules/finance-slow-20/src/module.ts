import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { shippingModule } from '@ci/shipping';
import { finance19Module } from '@ci/finance-19';
import { finance03Module } from '@ci/finance-03';

export const financeSlow20Module: ModuleInfo = defineModule({
  name: '@ci/finance-slow-20',
  layer: 'modules',
  deps: [utilsModule, shippingModule, finance19Module, finance03Module],
});

export function describeFinanceSlow20(): string {
  return describeModule(financeSlow20Module);
}
