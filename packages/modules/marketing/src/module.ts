import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { marketing01Module } from '@ci/marketing-01';
import { marketing02Module } from '@ci/marketing-02';
import { marketing03Module } from '@ci/marketing-03';
import { marketingSlow04Module } from '@ci/marketing-slow-04';
import { marketingFlaky05Module } from '@ci/marketing-flaky-05';
import { marketing06Module } from '@ci/marketing-06';
import { marketingCpu07Module } from '@ci/marketing-cpu-07';
import { marketingSlow08Module } from '@ci/marketing-slow-08';
import { marketingMem09Module } from '@ci/marketing-mem-09';
import { marketing10Module } from '@ci/marketing-10';
import { marketing11Module } from '@ci/marketing-11';
import { marketingSlow12Module } from '@ci/marketing-slow-12';
import { marketing13Module } from '@ci/marketing-13';
import { marketingCpu14Module } from '@ci/marketing-cpu-14';
import { marketingFlaky15Module } from '@ci/marketing-flaky-15';
import { marketingSlow16Module } from '@ci/marketing-slow-16';
import { marketing17Module } from '@ci/marketing-17';
import { marketingMem18Module } from '@ci/marketing-mem-18';
import { marketing19Module } from '@ci/marketing-19';
import { marketingSlow20Module } from '@ci/marketing-slow-20';

export const marketingModule: ModuleInfo = defineModule({
  name: '@ci/marketing',
  layer: 'modules',
  deps: [
    utilsModule,
    marketing01Module,
    marketing02Module,
    marketing03Module,
    marketingSlow04Module,
    marketingFlaky05Module,
    marketing06Module,
    marketingCpu07Module,
    marketingSlow08Module,
    marketingMem09Module,
    marketing10Module,
    marketing11Module,
    marketingSlow12Module,
    marketing13Module,
    marketingCpu14Module,
    marketingFlaky15Module,
    marketingSlow16Module,
    marketing17Module,
    marketingMem18Module,
    marketing19Module,
    marketingSlow20Module,
  ],
});

export function describeMarketing(): string {
  return describeModule(marketingModule);
}
