import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { dbModule } from '@ci/db';
import { eventsModule } from '@ci/events';
import { dateModule } from '@ci/date';
import { schemaModule } from '@ci/schema';

export const billingModule: ModuleInfo = defineModule({
  name: '@ci/billing',
  layer: 'features',
  deps: [utilsModule, usersModule, dbModule, eventsModule, dateModule, schemaModule],
});

export function describeBilling(): string {
  return describeModule(billingModule);
}
