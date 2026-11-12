import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { constantsModule } from '@ci/constants';

export const loggerModule: ModuleInfo = defineModule({
  name: '@ci/logger',
  layer: 'shared',
  deps: [utilsModule, constantsModule],
});

export function describeLogger(): string {
  return describeModule(loggerModule);
}
