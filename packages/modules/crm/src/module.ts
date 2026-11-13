import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { crm01Module } from '@ci/crm-01';
import { crm02Module } from '@ci/crm-02';
import { crm03Module } from '@ci/crm-03';
import { crmSlow04Module } from '@ci/crm-slow-04';
import { crmFlaky05Module } from '@ci/crm-flaky-05';
import { crm06Module } from '@ci/crm-06';
import { crmCpu07Module } from '@ci/crm-cpu-07';
import { crmSlow08Module } from '@ci/crm-slow-08';
import { crmMem09Module } from '@ci/crm-mem-09';
import { crm10Module } from '@ci/crm-10';
import { crm11Module } from '@ci/crm-11';
import { crmSlow12Module } from '@ci/crm-slow-12';
import { crm13Module } from '@ci/crm-13';
import { crmCpu14Module } from '@ci/crm-cpu-14';
import { crmFlaky15Module } from '@ci/crm-flaky-15';
import { crmSlow16Module } from '@ci/crm-slow-16';
import { crm17Module } from '@ci/crm-17';
import { crmMem18Module } from '@ci/crm-mem-18';
import { crm19Module } from '@ci/crm-19';
import { crmSlow20Module } from '@ci/crm-slow-20';

export const crmModule: ModuleInfo = defineModule({
  name: '@ci/crm',
  layer: 'modules',
  deps: [
    utilsModule,
    crm01Module,
    crm02Module,
    crm03Module,
    crmSlow04Module,
    crmFlaky05Module,
    crm06Module,
    crmCpu07Module,
    crmSlow08Module,
    crmMem09Module,
    crm10Module,
    crm11Module,
    crmSlow12Module,
    crm13Module,
    crmCpu14Module,
    crmFlaky15Module,
    crmSlow16Module,
    crm17Module,
    crmMem18Module,
    crm19Module,
    crmSlow20Module,
  ],
});

export function describeCrm(): string {
  return describeModule(crmModule);
}
