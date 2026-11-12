import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { httpModule } from '@ci/http';
import { support02Module } from '@ci/support-02';

export const support03Module: ModuleInfo = defineModule({
  name: '@ci/support-03',
  layer: 'modules',
  deps: [utilsModule, httpModule, support02Module],
});

export function describeSupport03(): string {
  return describeModule(support03Module);
}
