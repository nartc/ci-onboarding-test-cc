import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { resultModule } from '@ci/result';
import { errorsModule } from '@ci/errors';

export const validationModule: ModuleInfo = defineModule({
  name: '@ci/validation',
  layer: 'shared',
  deps: [utilsModule, resultModule, errorsModule],
});

export function describeValidation(): string {
  return describeModule(validationModule);
}
