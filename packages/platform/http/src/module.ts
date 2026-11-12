import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { loggerModule } from '@ci/logger';
import { configModule } from '@ci/config';
import { serializerModule } from '@ci/serializer';
import { errorsModule } from '@ci/errors';

export const httpModule: ModuleInfo = defineModule({
  name: '@ci/http',
  layer: 'platform',
  deps: [utilsModule, loggerModule, configModule, serializerModule, errorsModule],
});

export function describeHttp(): string {
  return describeModule(httpModule);
}
