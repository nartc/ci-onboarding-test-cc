import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { paymentsModule } from '@ci/payments';
import { pricing19Module } from '@ci/pricing-19';

export const pricingSlow20Module: ModuleInfo = defineModule({
  name: '@ci/pricing-slow-20',
  layer: 'modules',
  deps: [utilsModule, paymentsModule, pricing19Module],
});

export function describePricingSlow20(): string {
  return describeModule(pricingSlow20Module);
}
