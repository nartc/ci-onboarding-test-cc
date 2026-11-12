import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { errorsModule } from '@ci/errors';

export const cryptoModule: ModuleInfo = defineModule({
  name: '@ci/crypto',
  layer: 'shared',
  deps: [utilsModule, errorsModule],
});

export function describeCrypto(): string {
  return describeModule(cryptoModule);
}
