import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { shippingModule } from '@ci/shipping';
import { catalog02Module } from '@ci/catalog-02';

export const catalogFlaky05Module: ModuleInfo = defineModule({
  name: '@ci/catalog-flaky-05',
  layer: 'modules',
  deps: [utilsModule, shippingModule, catalog02Module],
});

export function describeCatalogFlaky05(): string {
  return describeModule(catalogFlaky05Module);
}
