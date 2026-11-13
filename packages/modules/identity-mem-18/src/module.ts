import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { recommendationsModule } from '@ci/recommendations';
import { shippingModule } from '@ci/shipping';
import { usersModule } from '@ci/users';
import { identity17Module } from '@ci/identity-17';

export const identityMem18Module: ModuleInfo = defineModule({
  name: '@ci/identity-mem-18',
  layer: 'modules',
  deps: [utilsModule, recommendationsModule, shippingModule, usersModule, identity17Module],
});

export function describeIdentityMem18(): string {
  return describeModule(identityMem18Module);
}
