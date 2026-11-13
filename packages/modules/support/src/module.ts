import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { support01Module } from '@ci/support-01';
import { support02Module } from '@ci/support-02';
import { support03Module } from '@ci/support-03';
import { supportSlow04Module } from '@ci/support-slow-04';
import { supportFlaky05Module } from '@ci/support-flaky-05';
import { support06Module } from '@ci/support-06';
import { supportCpu07Module } from '@ci/support-cpu-07';
import { supportSlow08Module } from '@ci/support-slow-08';
import { supportMem09Module } from '@ci/support-mem-09';
import { support10Module } from '@ci/support-10';
import { support11Module } from '@ci/support-11';
import { supportSlow12Module } from '@ci/support-slow-12';
import { support13Module } from '@ci/support-13';
import { supportCpu14Module } from '@ci/support-cpu-14';
import { supportFlaky15Module } from '@ci/support-flaky-15';
import { supportSlow16Module } from '@ci/support-slow-16';
import { support17Module } from '@ci/support-17';
import { supportMem18Module } from '@ci/support-mem-18';
import { support19Module } from '@ci/support-19';
import { supportSlow20Module } from '@ci/support-slow-20';

export const supportModule: ModuleInfo = defineModule({
  name: '@ci/support',
  layer: 'modules',
  deps: [
    utilsModule,
    support01Module,
    support02Module,
    support03Module,
    supportSlow04Module,
    supportFlaky05Module,
    support06Module,
    supportCpu07Module,
    supportSlow08Module,
    supportMem09Module,
    support10Module,
    support11Module,
    supportSlow12Module,
    support13Module,
    supportCpu14Module,
    supportFlaky15Module,
    supportSlow16Module,
    support17Module,
    supportMem18Module,
    support19Module,
    supportSlow20Module,
  ],
});

export function describeSupport(): string {
  return describeModule(supportModule);
}
