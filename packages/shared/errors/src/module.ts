import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { constantsModule } from '@ci/constants';

export const errorsModule: ModuleInfo = defineModule({
  name: '@ci/errors',
  layer: 'shared',
  deps: [utilsModule, constantsModule],
});

export function describeErrors(): string {
  return describeModule(errorsModule);
}
