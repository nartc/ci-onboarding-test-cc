import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { validationModule } from '@ci/validation';
import { marketingMem09Module } from '@ci/marketing-mem-09';

export const marketing10Module: ModuleInfo = defineModule({
  name: '@ci/marketing-10',
  layer: 'modules',
  deps: [utilsModule, validationModule, marketingMem09Module],
});

export function describeMarketing10(): string {
  return describeModule(marketing10Module);
}
