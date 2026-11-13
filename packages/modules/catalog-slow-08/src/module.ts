import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { queueModule } from '@ci/queue';
import { catalogCpu07Module } from '@ci/catalog-cpu-07';

export const catalogSlow08Module: ModuleInfo = defineModule({
  name: '@ci/catalog-slow-08',
  layer: 'modules',
  deps: [utilsModule, queueModule, catalogCpu07Module],
});

export function describeCatalogSlow08(): string {
  return describeModule(catalogSlow08Module);
}
