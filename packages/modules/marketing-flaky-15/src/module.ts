import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { analyticsModule } from '@ci/analytics';
import { i18nModule } from '@ci/i18n';
import { dbModule } from '@ci/db';
import { marketingCpu14Module } from '@ci/marketing-cpu-14';

export const marketingFlaky15Module: ModuleInfo = defineModule({
  name: '@ci/marketing-flaky-15',
  layer: 'modules',
  deps: [utilsModule, analyticsModule, i18nModule, dbModule, marketingCpu14Module],
});

export function describeMarketingFlaky15(): string {
  return describeModule(marketingFlaky15Module);
}
