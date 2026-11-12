import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { metricsModule } from '@ci/metrics';
import { httpModule } from '@ci/http';

export const tracingModule: ModuleInfo = defineModule({
  name: '@ci/tracing',
  layer: 'platform',
  deps: [utilsModule, metricsModule, httpModule],
});

export function describeTracing(): string {
  return describeModule(tracingModule);
}
