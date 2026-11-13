import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { inventoryModule } from '@ci/inventory';
import { reportsModule } from '@ci/reports';
import { notificationsModule } from '@ci/notifications';
import { support19Module } from '@ci/support-19';
import { support17Module } from '@ci/support-17';

export const supportSlow20Module: ModuleInfo = defineModule({
  name: '@ci/support-slow-20',
  layer: 'modules',
  deps: [
    utilsModule,
    inventoryModule,
    reportsModule,
    notificationsModule,
    support19Module,
    support17Module,
  ],
});

export function describeSupportSlow20(): string {
  return describeModule(supportSlow20Module);
}
