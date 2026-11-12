import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { queueModule } from '@ci/queue';
import { reportsModule } from '@ci/reports';
import { serializerModule } from '@ci/serializer';
import { catalogFlaky15Module } from '@ci/catalog-flaky-15';

export const catalogSlow16Module: ModuleInfo = defineModule({
  name: '@ci/catalog-slow-16',
  layer: 'modules',
  deps: [utilsModule, queueModule, reportsModule, serializerModule, catalogFlaky15Module],
});

export function describeCatalogSlow16(): string {
  return describeModule(catalogSlow16Module);
}
