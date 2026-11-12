import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { notificationsModule } from '@ci/notifications';
import { support17Module } from '@ci/support-17';
import { support10Module } from '@ci/support-10';

export const supportMem18Module: ModuleInfo = defineModule({
  name: '@ci/support-mem-18',
  layer: 'modules',
  deps: [utilsModule, notificationsModule, support17Module, support10Module],
});

export function describeSupportMem18(): string {
  return describeModule(supportMem18Module);
}
