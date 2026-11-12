import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { dbModule } from '@ci/db';
import { cacheModule } from '@ci/cache';
import { eventsModule } from '@ci/events';
import { schemaModule } from '@ci/schema';

export const inventoryModule: ModuleInfo = defineModule({
  name: '@ci/inventory',
  layer: 'features',
  deps: [utilsModule, dbModule, cacheModule, eventsModule, schemaModule],
});

export function describeInventory(): string {
  return describeModule(inventoryModule);
}
