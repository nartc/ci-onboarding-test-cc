import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { finance01Module } from '@ci/finance-01';
import { finance02Module } from '@ci/finance-02';
import { finance03Module } from '@ci/finance-03';
import { financeSlow04Module } from '@ci/finance-slow-04';
import { financeFlaky05Module } from '@ci/finance-flaky-05';
import { finance06Module } from '@ci/finance-06';
import { financeCpu07Module } from '@ci/finance-cpu-07';
import { financeSlow08Module } from '@ci/finance-slow-08';
import { financeMem09Module } from '@ci/finance-mem-09';
import { finance10Module } from '@ci/finance-10';
import { finance11Module } from '@ci/finance-11';
import { financeSlow12Module } from '@ci/finance-slow-12';
import { finance13Module } from '@ci/finance-13';
import { financeCpu14Module } from '@ci/finance-cpu-14';
import { financeFlaky15Module } from '@ci/finance-flaky-15';
import { financeSlow16Module } from '@ci/finance-slow-16';
import { finance17Module } from '@ci/finance-17';
import { financeMem18Module } from '@ci/finance-mem-18';
import { finance19Module } from '@ci/finance-19';
import { financeSlow20Module } from '@ci/finance-slow-20';

export const financeModule: ModuleInfo = defineModule({
  name: '@ci/finance',
  layer: 'modules',
  deps: [
    utilsModule,
    finance01Module,
    finance02Module,
    finance03Module,
    financeSlow04Module,
    financeFlaky05Module,
    finance06Module,
    financeCpu07Module,
    financeSlow08Module,
    financeMem09Module,
    finance10Module,
    finance11Module,
    financeSlow12Module,
    finance13Module,
    financeCpu14Module,
    financeFlaky15Module,
    financeSlow16Module,
    finance17Module,
    financeMem18Module,
    finance19Module,
    financeSlow20Module,
  ],
});

export function describeFinance(): string {
  return describeModule(financeModule);
}
