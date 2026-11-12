import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { eventsModule } from '@ci/events';
import { loggerModule } from '@ci/logger';
import { dateModule } from '@ci/date';

export const metricsModule: ModuleInfo = defineModule({
  name: '@ci/metrics',
  layer: 'platform',
  deps: [utilsModule, eventsModule, loggerModule, dateModule],
});

export function describeMetrics(): string {
  return describeModule(metricsModule);
}
