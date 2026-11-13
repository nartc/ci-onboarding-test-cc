import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { analyticsModule } from '@ci/analytics';
import { catalog01Module } from '@ci/catalog-01';

export const catalogCpu07Module: ModuleInfo = defineModule({
  name: '@ci/catalog-cpu-07',
  layer: 'modules',
  deps: [utilsModule, analyticsModule, catalog01Module],
});

export function describeCatalogCpu07(): string {
  return describeModule(catalogCpu07Module);
}
