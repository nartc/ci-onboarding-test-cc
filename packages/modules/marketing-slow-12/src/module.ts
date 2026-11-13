import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { analyticsModule } from '@ci/analytics';
import { marketing11Module } from '@ci/marketing-11';
import { marketing03Module } from '@ci/marketing-03';

export const marketingSlow12Module: ModuleInfo = defineModule({
  name: '@ci/marketing-slow-12',
  layer: 'modules',
  deps: [utilsModule, analyticsModule, marketing11Module, marketing03Module],
});

export function describeMarketingSlow12(): string {
  return describeModule(marketingSlow12Module);
}
