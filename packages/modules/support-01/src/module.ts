import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { searchModule } from '@ci/search';
import { authModule } from '@ci/auth';
import { pricing03Module } from '@ci/pricing-03';

export const support01Module: ModuleInfo = defineModule({
  name: '@ci/support-01',
  layer: 'modules',
  deps: [utilsModule, searchModule, authModule, pricing03Module],
});

export function describeSupport01(): string {
  return describeModule(support01Module);
}
