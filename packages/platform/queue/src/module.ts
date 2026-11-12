import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { eventsModule } from '@ci/events';
import { dbModule } from '@ci/db';
import { serializerModule } from '@ci/serializer';
import { tracingModule } from '@ci/tracing';

export const queueModule: ModuleInfo = defineModule({
  name: '@ci/queue',
  layer: 'platform',
  deps: [utilsModule, eventsModule, dbModule, serializerModule, tracingModule],
});

export function describeQueue(): string {
  return describeModule(queueModule);
}
