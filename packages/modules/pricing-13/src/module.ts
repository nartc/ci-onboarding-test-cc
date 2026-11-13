import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { recommendationsModule } from '@ci/recommendations';
import { pricing03Module } from '@ci/pricing-03';

export const pricing13Module: ModuleInfo = defineModule({
  name: '@ci/pricing-13',
  layer: 'modules',
  deps: [utilsModule, recommendationsModule, pricing03Module],
});

export function describePricing13(): string {
  return describeModule(pricing13Module);
}
