import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { billingModule } from '@ci/billing';
import { eventsModule } from '@ci/events';

export const warehouse13Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-13',
  layer: 'modules',
  deps: [utilsModule, billingModule, eventsModule],
});

export function describeWarehouse13(): string {
  return describeModule(warehouse13Module);
}
