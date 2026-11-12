import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { configModule } from '@ci/config';
import { loggerModule } from '@ci/logger';
import { errorsModule } from '@ci/errors';
import { validationModule } from '@ci/validation';
import { schemaModule } from '@ci/schema';

export const dbModule: ModuleInfo = defineModule({
  name: '@ci/db',
  layer: 'platform',
  deps: [utilsModule, configModule, loggerModule, errorsModule, validationModule, schemaModule],
});

export function describeDb(): string {
  return describeModule(dbModule);
}
