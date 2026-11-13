import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { tracingModule } from '@ci/tracing';
import { errorsModule } from '@ci/errors';
import { catalogMem09Module } from '@ci/catalog-mem-09';
import { catalogCpu07Module } from '@ci/catalog-cpu-07';

export const catalog10Module: ModuleInfo = defineModule({
  name: '@ci/catalog-10',
  layer: 'modules',
  deps: [utilsModule, tracingModule, errorsModule, catalogMem09Module, catalogCpu07Module],
});

export function describeCatalog10(): string {
  return describeModule(catalog10Module);
}
