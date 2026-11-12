import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { reportsModule } from '@ci/reports';
import { catalogSlow12Module } from '@ci/catalog-slow-12';

export const catalog13Module: ModuleInfo = defineModule({
  name: '@ci/catalog-13',
  layer: 'modules',
  deps: [utilsModule, reportsModule, catalogSlow12Module],
});

export function describeCatalog13(): string {
  return describeModule(catalog13Module);
}
