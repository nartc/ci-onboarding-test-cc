import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { storageModule } from '@ci/storage';
import { identityMem09Module } from '@ci/identity-mem-09';

export const identitySlow16Module: ModuleInfo = defineModule({
  name: '@ci/identity-slow-16',
  layer: 'modules',
  deps: [utilsModule, storageModule, identityMem09Module],
});

export function describeIdentitySlow16(): string {
  return describeModule(identitySlow16Module);
}
