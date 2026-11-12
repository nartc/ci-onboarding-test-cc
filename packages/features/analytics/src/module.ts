import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { metricsModule } from '@ci/metrics';
import { ordersModule } from '@ci/orders';
import { usersModule } from '@ci/users';
import { dateModule } from '@ci/date';

export const analyticsModule: ModuleInfo = defineModule({
  name: '@ci/analytics',
  layer: 'features',
  deps: [utilsModule, metricsModule, ordersModule, usersModule, dateModule],
});

export function describeAnalytics(): string {
  return describeModule(analyticsModule);
}
