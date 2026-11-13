import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { httpModule } from '@ci/http';
import { supportFlaky15Module } from '@ci/support-flaky-15';
import { support06Module } from '@ci/support-06';

export const supportSlow16Module: ModuleInfo = defineModule({
  name: '@ci/support-slow-16',
  layer: 'modules',
  deps: [utilsModule, httpModule, supportFlaky15Module, support06Module],
});

export function describeSupportSlow16(): string {
  return describeModule(supportSlow16Module);
}
