import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { dbModule } from '@ci/db';
import { cacheModule } from '@ci/cache';
import { cryptoModule } from '@ci/crypto';

export const storageModule: ModuleInfo = defineModule({
  name: '@ci/storage',
  layer: 'platform',
  deps: [utilsModule, dbModule, cacheModule, cryptoModule],
});

export function describeStorage(): string {
  return describeModule(storageModule);
}
