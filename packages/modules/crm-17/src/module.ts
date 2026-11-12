import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { metricsModule } from '@ci/metrics';
import { inventoryModule } from '@ci/inventory';

export const crm17Module: ModuleInfo = defineModule({
  name: '@ci/crm-17',
  layer: 'modules',
  deps: [utilsModule, metricsModule, inventoryModule],
});

export function describeCrm17(): string {
  return describeModule(crm17Module);
}
