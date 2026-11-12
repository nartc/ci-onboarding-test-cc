import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { httpModule } from '@ci/http';
import { support11Module } from '@ci/support-11';

export const warehouse11Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-11',
  layer: 'modules',
  deps: [utilsModule, httpModule, support11Module],
});

export function describeWarehouse11(): string {
  return describeModule(warehouse11Module);
}
