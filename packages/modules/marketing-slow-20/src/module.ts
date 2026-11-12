import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { shippingModule } from '@ci/shipping';
import { marketing10Module } from '@ci/marketing-10';
import { identitySlow04Module } from '@ci/identity-slow-04';

export const marketingSlow20Module: ModuleInfo = defineModule({
  name: '@ci/marketing-slow-20',
  layer: 'modules',
  deps: [utilsModule, shippingModule, marketing10Module, identitySlow04Module],
});

export function describeMarketingSlow20(): string {
  return describeModule(marketingSlow20Module);
}
