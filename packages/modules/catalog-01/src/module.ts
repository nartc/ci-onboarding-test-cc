import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { paymentsModule } from '@ci/payments';
import { eventsModule } from '@ci/events';
import { dbModule } from '@ci/db';

export const catalog01Module: ModuleInfo = defineModule({
  name: '@ci/catalog-01',
  layer: 'modules',
  deps: [utilsModule, paymentsModule, eventsModule, dbModule],
});

export function describeCatalog01(): string {
  return describeModule(catalog01Module);
}
