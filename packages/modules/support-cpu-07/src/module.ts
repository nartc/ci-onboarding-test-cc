import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { billingModule } from '@ci/billing';
import { tracingModule } from '@ci/tracing';
import { supportFlaky05Module } from '@ci/support-flaky-05';

export const supportCpu07Module: ModuleInfo = defineModule({
  name: '@ci/support-cpu-07',
  layer: 'modules',
  deps: [utilsModule, billingModule, tracingModule, supportFlaky05Module],
});

export function describeSupportCpu07(): string {
  return describeModule(supportCpu07Module);
}
