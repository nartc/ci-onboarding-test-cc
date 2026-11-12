import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { eventsModule } from '@ci/events';
import { usersModule } from '@ci/users';
import { storageModule } from '@ci/storage';
import { tracingModule } from '@ci/tracing';

export const auditModule: ModuleInfo = defineModule({
  name: '@ci/audit',
  layer: 'features',
  deps: [utilsModule, eventsModule, usersModule, storageModule, tracingModule],
});

export function describeAudit(): string {
  return describeModule(auditModule);
}
