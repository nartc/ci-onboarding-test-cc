import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { analyticsModule } from '@ci/analytics';
import { ordersModule } from '@ci/orders';
import { catalog11Module } from '@ci/catalog-11';

export const catalogSlow12Module: ModuleInfo = defineModule({
  name: '@ci/catalog-slow-12',
  layer: 'modules',
  deps: [utilsModule, analyticsModule, ordersModule, catalog11Module],
});

export function describeCatalogSlow12(): string {
  return describeModule(catalogSlow12Module);
}
