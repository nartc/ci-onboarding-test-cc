import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { queueModule } from '@ci/queue';
import { cryptoModule } from '@ci/crypto';
import { analyticsModule } from '@ci/analytics';
import { pricing13Module } from '@ci/pricing-13';
import { pricing03Module } from '@ci/pricing-03';
import { marketingCpu14Module } from '@ci/marketing-cpu-14';

export const pricingCpu14Module: ModuleInfo = defineModule({
  name: '@ci/pricing-cpu-14',
  layer: 'modules',
  deps: [
    utilsModule,
    queueModule,
    cryptoModule,
    analyticsModule,
    pricing13Module,
    pricing03Module,
    marketingCpu14Module,
  ],
});

export function describePricingCpu14(): string {
  return describeModule(pricingCpu14Module);
}
