import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { supportMem18Module } from '@ci/support-mem-18';

export const support19Module: ModuleInfo = defineModule({
  name: '@ci/support-19',
  layer: 'modules',
  deps: [utilsModule, usersModule, supportMem18Module],
});

export function describeSupport19(): string {
  return describeModule(support19Module);
}
