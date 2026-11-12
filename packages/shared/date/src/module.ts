import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { constantsModule } from '@ci/constants';

export const dateModule: ModuleInfo = defineModule({
  name: '@ci/date',
  layer: 'shared',
  deps: [utilsModule, constantsModule],
});

export function describeDate(): string {
  return describeModule(dateModule);
}
