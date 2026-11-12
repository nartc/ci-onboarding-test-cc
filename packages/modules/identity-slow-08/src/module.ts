import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { featureFlagsModule } from '@ci/feature-flags';
import { identityCpu07Module } from '@ci/identity-cpu-07';
import { identity01Module } from '@ci/identity-01';

export const identitySlow08Module: ModuleInfo = defineModule({
  name: '@ci/identity-slow-08',
  layer: 'modules',
  deps: [utilsModule, usersModule, featureFlagsModule, identityCpu07Module, identity01Module],
});

export function describeIdentitySlow08(): string {
  return describeModule(identitySlow08Module);
}
