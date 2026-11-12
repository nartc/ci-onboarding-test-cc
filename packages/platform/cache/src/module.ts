import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { loggerModule } from '@ci/logger';
import { serializerModule } from '@ci/serializer';
import { configModule } from '@ci/config';

export const cacheModule: ModuleInfo = defineModule({
  name: '@ci/cache',
  layer: 'platform',
  deps: [utilsModule, loggerModule, serializerModule, configModule],
});

export function describeCache(): string {
  return describeModule(cacheModule);
}
