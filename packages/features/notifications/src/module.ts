import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { queueModule } from '@ci/queue';
import { i18nModule } from '@ci/i18n';
import { featureFlagsModule } from '@ci/feature-flags';

export const notificationsModule: ModuleInfo = defineModule({
  name: '@ci/notifications',
  layer: 'features',
  deps: [utilsModule, usersModule, queueModule, i18nModule, featureFlagsModule],
});

export function describeNotifications(): string {
  return describeModule(notificationsModule);
}
