import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { queueModule } from '@ci/queue';
import { storageModule } from '@ci/storage';
import { identity03Module } from '@ci/identity-03';
import { fulfillment03Module } from '@ci/fulfillment-03';

export const identitySlow04Module: ModuleInfo = defineModule({
  name: '@ci/identity-slow-04',
  layer: 'modules',
  deps: [
    utilsModule,
    usersModule,
    queueModule,
    storageModule,
    identity03Module,
    fulfillment03Module,
  ],
});

export function describeIdentitySlow04(): string {
  return describeModule(identitySlow04Module);
}
