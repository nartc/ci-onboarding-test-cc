import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { dbModule } from '@ci/db';
import { catalogMem09Module } from '@ci/catalog-mem-09';

export const catalog17Module: ModuleInfo = defineModule({
  name: '@ci/catalog-17',
  layer: 'modules',
  deps: [utilsModule, dbModule, catalogMem09Module],
});

export function describeCatalog17(): string {
  return describeModule(catalog17Module);
}
