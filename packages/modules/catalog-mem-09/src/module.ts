import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { auditModule } from '@ci/audit';
import { analyticsModule } from '@ci/analytics';
import { catalogSlow08Module } from '@ci/catalog-slow-08';
import { catalogSlow04Module } from '@ci/catalog-slow-04';

export const catalogMem09Module: ModuleInfo = defineModule({
  name: '@ci/catalog-mem-09',
  layer: 'modules',
  deps: [utilsModule, auditModule, analyticsModule, catalogSlow08Module, catalogSlow04Module],
});

export function describeCatalogMem09(): string {
  return describeModule(catalogMem09Module);
}
