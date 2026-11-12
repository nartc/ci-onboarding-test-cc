import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { errorsModule } from '@ci/errors';
import { catalog17Module } from '@ci/catalog-17';

export const catalogMem18Module: ModuleInfo = defineModule({
  name: '@ci/catalog-mem-18',
  layer: 'modules',
  deps: [utilsModule, usersModule, errorsModule, catalog17Module],
});

export function describeCatalogMem18(): string {
  return describeModule(catalogMem18Module);
}
