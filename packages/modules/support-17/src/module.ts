import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { tracingModule } from '@ci/tracing';
import { supportSlow16Module } from '@ci/support-slow-16';

export const support17Module: ModuleInfo = defineModule({
  name: '@ci/support-17',
  layer: 'modules',
  deps: [utilsModule, tracingModule, supportSlow16Module],
});

export function describeSupport17(): string {
  return describeModule(support17Module);
}
