import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { httpModule } from '@ci/http';
import { marketing17Module } from '@ci/marketing-17';
import { marketingFlaky05Module } from '@ci/marketing-flaky-05';

export const marketingMem18Module: ModuleInfo = defineModule({
  name: '@ci/marketing-mem-18',
  layer: 'modules',
  deps: [utilsModule, httpModule, marketing17Module, marketingFlaky05Module],
});

export function describeMarketingMem18(): string {
  return describeModule(marketingMem18Module);
}
