import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { shippingModule } from '@ci/shipping';
import { catalog13Module } from '@ci/catalog-13';
import { catalog10Module } from '@ci/catalog-10';

export const catalogCpu14Module: ModuleInfo = defineModule({
  name: '@ci/catalog-cpu-14',
  layer: 'modules',
  deps: [utilsModule, shippingModule, catalog13Module, catalog10Module],
});

export function describeCatalogCpu14(): string {
  return describeModule(catalogCpu14Module);
}
