import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { loggerModule } from '@ci/logger';
import { serializerModule } from '@ci/serializer';

export const eventsModule: ModuleInfo = defineModule({
  name: '@ci/events',
  layer: 'platform',
  deps: [utilsModule, loggerModule, serializerModule],
});

export function describeEvents(): string {
  return describeModule(eventsModule);
}
