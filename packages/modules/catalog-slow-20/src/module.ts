import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { recommendationsModule } from '@ci/recommendations';
import { catalog17Module } from '@ci/catalog-17';

export const catalogSlow20Module: ModuleInfo = defineModule({
  name: '@ci/catalog-slow-20',
  layer: 'modules',
  deps: [utilsModule, recommendationsModule, catalog17Module],
});

export function describeCatalogSlow20(): string {
  return describeModule(catalogSlow20Module);
}
