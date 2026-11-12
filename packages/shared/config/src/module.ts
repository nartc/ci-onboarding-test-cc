import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { validationModule } from '@ci/validation';
import { constantsModule } from '@ci/constants';
import { loggerModule } from '@ci/logger';

export const configModule: ModuleInfo = defineModule({
  name: '@ci/config',
  layer: 'shared',
  deps: [utilsModule, validationModule, constantsModule, loggerModule],
});

export function describeConfig(): string {
  return describeModule(configModule);
}
