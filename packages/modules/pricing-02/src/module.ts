import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { configModule } from '@ci/config';
import { auditModule } from '@ci/audit';
import { pricing01Module } from '@ci/pricing-01';

export const pricing02Module: ModuleInfo = defineModule({
  name: '@ci/pricing-02',
  layer: 'modules',
  deps: [utilsModule, configModule, auditModule, pricing01Module],
});

export function describePricing02(): string {
  return describeModule(pricing02Module);
}
