import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { reportsModule } from '@ci/reports';
import { marketingSlow12Module } from '@ci/marketing-slow-12';

export const marketing13Module: ModuleInfo = defineModule({
  name: '@ci/marketing-13',
  layer: 'modules',
  deps: [utilsModule, reportsModule, marketingSlow12Module],
});

export function describeMarketing13(): string {
  return describeModule(marketing13Module);
}
