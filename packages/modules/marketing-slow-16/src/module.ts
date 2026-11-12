import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { cacheModule } from '@ci/cache';
import { marketingFlaky15Module } from '@ci/marketing-flaky-15';
import { marketingSlow08Module } from '@ci/marketing-slow-08';

export const marketingSlow16Module: ModuleInfo = defineModule({
  name: '@ci/marketing-slow-16',
  layer: 'modules',
  deps: [utilsModule, cacheModule, marketingFlaky15Module, marketingSlow08Module],
});

export function describeMarketingSlow16(): string {
  return describeModule(marketingSlow16Module);
}
