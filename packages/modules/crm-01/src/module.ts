import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { metricsModule } from '@ci/metrics';

export const crm01Module: ModuleInfo = defineModule({
  name: '@ci/crm-01',
  layer: 'modules',
  deps: [utilsModule, metricsModule],
});

export function describeCrm01(): string {
  return describeModule(crm01Module);
}
