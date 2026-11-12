import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { cryptoModule } from '@ci/crypto';
import { dbModule } from '@ci/db';
import { cacheModule } from '@ci/cache';
import { httpModule } from '@ci/http';

export const authModule: ModuleInfo = defineModule({
  name: '@ci/auth',
  layer: 'platform',
  deps: [utilsModule, cryptoModule, dbModule, cacheModule, httpModule],
});

export function describeAuth(): string {
  return describeModule(authModule);
}
