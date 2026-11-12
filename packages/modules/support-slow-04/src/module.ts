import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { reportsModule } from '@ci/reports';
import { notificationsModule } from '@ci/notifications';
import { support02Module } from '@ci/support-02';

export const supportSlow04Module: ModuleInfo = defineModule({
  name: '@ci/support-slow-04',
  layer: 'modules',
  deps: [utilsModule, reportsModule, notificationsModule, support02Module],
});

export function describeSupportSlow04(): string {
  return describeModule(supportSlow04Module);
}
