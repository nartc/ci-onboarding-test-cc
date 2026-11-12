import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { metricsModule } from '@ci/metrics';

export const catalog19Module: ModuleInfo = defineModule({
  name: '@ci/catalog-19',
  layer: 'modules',
  deps: [utilsModule, metricsModule],
});

export function describeCatalog19(): string {
  return describeModule(catalog19Module);
}
