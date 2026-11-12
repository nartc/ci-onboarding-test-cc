import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { authModule } from '@ci/auth';
import { dbModule } from '@ci/db';
import { validationModule } from '@ci/validation';
import { eventsModule } from '@ci/events';
import { schemaModule } from '@ci/schema';

export const usersModule: ModuleInfo = defineModule({
  name: '@ci/users',
  layer: 'features',
  deps: [utilsModule, authModule, dbModule, validationModule, eventsModule, schemaModule],
});

export function describeUsers(): string {
  return describeModule(usersModule);
}
