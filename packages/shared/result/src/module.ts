import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { errorsModule } from '@ci/errors';

export const resultModule: ModuleInfo = defineModule({
  name: '@ci/result',
  layer: 'shared',
  deps: [utilsModule, errorsModule],
});

export function describeResult(): string {
  return describeModule(resultModule);
}
