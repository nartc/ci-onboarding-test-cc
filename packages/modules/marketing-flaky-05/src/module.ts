import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { billingModule } from '@ci/billing';
import { identityFlaky15Module } from '@ci/identity-flaky-15';

export const marketingFlaky05Module: ModuleInfo = defineModule({
  name: '@ci/marketing-flaky-05',
  layer: 'modules',
  deps: [utilsModule, billingModule, identityFlaky15Module],
});

export function describeMarketingFlaky05(): string {
  return describeModule(marketingFlaky05Module);
}
