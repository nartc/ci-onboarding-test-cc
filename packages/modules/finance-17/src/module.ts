import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { shippingModule } from '@ci/shipping';
import { serializerModule } from '@ci/serializer';
import { financeSlow16Module } from '@ci/finance-slow-16';

export const finance17Module: ModuleInfo = defineModule({
  name: '@ci/finance-17',
  layer: 'modules',
  deps: [utilsModule, shippingModule, serializerModule, financeSlow16Module],
});

export function describeFinance17(): string {
  return describeModule(finance17Module);
}
