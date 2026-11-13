import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { billingModule } from '@ci/billing';
import { marketing06Module } from '@ci/marketing-06';
import { identity11Module } from '@ci/identity-11';

export const marketingCpu07Module: ModuleInfo = defineModule({
  name: '@ci/marketing-cpu-07',
  layer: 'modules',
  deps: [utilsModule, billingModule, marketing06Module, identity11Module],
});

export function describeMarketingCpu07(): string {
  return describeModule(marketingCpu07Module);
}
