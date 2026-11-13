import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { metricsModule } from '@ci/metrics';
import { notificationsModule } from '@ci/notifications';

export const support11Module: ModuleInfo = defineModule({
  name: '@ci/support-11',
  layer: 'modules',
  deps: [utilsModule, metricsModule, notificationsModule],
});

export function describeSupport11(): string {
  return describeModule(support11Module);
}
