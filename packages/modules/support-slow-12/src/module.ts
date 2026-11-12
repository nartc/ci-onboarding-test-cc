import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { recommendationsModule } from '@ci/recommendations';
import { httpModule } from '@ci/http';
import { resultModule } from '@ci/result';
import { pricing03Module } from '@ci/pricing-03';

export const supportSlow12Module: ModuleInfo = defineModule({
  name: '@ci/support-slow-12',
  layer: 'modules',
  deps: [utilsModule, recommendationsModule, httpModule, resultModule, pricing03Module],
});

export function describeSupportSlow12(): string {
  return describeModule(supportSlow12Module);
}
