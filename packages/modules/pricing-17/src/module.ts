import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { auditModule } from '@ci/audit';
import { pricingSlow16Module } from '@ci/pricing-slow-16';

export const pricing17Module: ModuleInfo = defineModule({
  name: '@ci/pricing-17',
  layer: 'modules',
  deps: [utilsModule, auditModule, pricingSlow16Module],
});

export function describePricing17(): string {
  return describeModule(pricing17Module);
}
