import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { tracingModule } from '@ci/tracing';
import { supportFlaky05Module } from '@ci/support-flaky-05';
import { support02Module } from '@ci/support-02';

export const support06Module: ModuleInfo = defineModule({
  name: '@ci/support-06',
  layer: 'modules',
  deps: [utilsModule, tracingModule, supportFlaky05Module, support02Module],
});

export function describeSupport06(): string {
  return describeModule(support06Module);
}
