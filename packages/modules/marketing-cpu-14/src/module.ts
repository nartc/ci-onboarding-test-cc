import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { searchModule } from '@ci/search';
import { marketing13Module } from '@ci/marketing-13';

export const marketingCpu14Module: ModuleInfo = defineModule({
  name: '@ci/marketing-cpu-14',
  layer: 'modules',
  deps: [utilsModule, usersModule, searchModule, marketing13Module],
});

export function describeMarketingCpu14(): string {
  return describeModule(marketingCpu14Module);
}
