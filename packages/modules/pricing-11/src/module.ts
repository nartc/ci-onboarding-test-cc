import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { recommendationsModule } from '@ci/recommendations';
import { pricing10Module } from '@ci/pricing-10';
import { pricing06Module } from '@ci/pricing-06';

export const pricing11Module: ModuleInfo = defineModule({
  name: '@ci/pricing-11',
  layer: 'modules',
  deps: [utilsModule, recommendationsModule, pricing10Module, pricing06Module],
});

export function describePricing11(): string {
  return describeModule(pricing11Module);
}
