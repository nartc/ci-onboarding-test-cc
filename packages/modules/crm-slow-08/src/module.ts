import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { ordersModule } from '@ci/orders';
import { searchModule } from '@ci/search';
import { eventsModule } from '@ci/events';
import { crmCpu07Module } from '@ci/crm-cpu-07';
import { crm03Module } from '@ci/crm-03';

export const crmSlow08Module: ModuleInfo = defineModule({
  name: '@ci/crm-slow-08',
  layer: 'modules',
  deps: [utilsModule, ordersModule, searchModule, eventsModule, crmCpu07Module, crm03Module],
});

export function describeCrmSlow08(): string {
  return describeModule(crmSlow08Module);
}
