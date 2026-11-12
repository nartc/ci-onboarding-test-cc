import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { pricing01Module } from '@ci/pricing-01';
import { pricing02Module } from '@ci/pricing-02';
import { pricing03Module } from '@ci/pricing-03';
import { pricingSlow04Module } from '@ci/pricing-slow-04';
import { pricingFlaky05Module } from '@ci/pricing-flaky-05';
import { pricing06Module } from '@ci/pricing-06';
import { pricingCpu07Module } from '@ci/pricing-cpu-07';
import { pricingSlow08Module } from '@ci/pricing-slow-08';
import { pricingMem09Module } from '@ci/pricing-mem-09';
import { pricing10Module } from '@ci/pricing-10';
import { pricing11Module } from '@ci/pricing-11';
import { pricingSlow12Module } from '@ci/pricing-slow-12';
import { pricing13Module } from '@ci/pricing-13';
import { pricingCpu14Module } from '@ci/pricing-cpu-14';
import { pricingFlaky15Module } from '@ci/pricing-flaky-15';
import { pricingSlow16Module } from '@ci/pricing-slow-16';
import { pricing17Module } from '@ci/pricing-17';
import { pricingMem18Module } from '@ci/pricing-mem-18';
import { pricing19Module } from '@ci/pricing-19';
import { pricingSlow20Module } from '@ci/pricing-slow-20';

export const pricingModule: ModuleInfo = defineModule({
  name: '@ci/pricing',
  layer: 'modules',
  deps: [
    utilsModule,
    pricing01Module,
    pricing02Module,
    pricing03Module,
    pricingSlow04Module,
    pricingFlaky05Module,
    pricing06Module,
    pricingCpu07Module,
    pricingSlow08Module,
    pricingMem09Module,
    pricing10Module,
    pricing11Module,
    pricingSlow12Module,
    pricing13Module,
    pricingCpu14Module,
    pricingFlaky15Module,
    pricingSlow16Module,
    pricing17Module,
    pricingMem18Module,
    pricing19Module,
    pricingSlow20Module,
  ],
});

export function describePricing(): string {
  return describeModule(pricingModule);
}
