import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { i18nModule } from '@ci/i18n';
import { recommendationsModule } from '@ci/recommendations';
import { catalog03Module } from '@ci/catalog-03';
import { catalog01Module } from '@ci/catalog-01';

export const catalogSlow04Module: ModuleInfo = defineModule({
  name: '@ci/catalog-slow-04',
  layer: 'modules',
  deps: [utilsModule, i18nModule, recommendationsModule, catalog03Module, catalog01Module],
});

export function describeCatalogSlow04(): string {
  return describeModule(catalogSlow04Module);
}
