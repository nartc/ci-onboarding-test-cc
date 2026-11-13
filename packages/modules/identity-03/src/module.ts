import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { featureFlagsModule } from '@ci/feature-flags';
import { metricsModule } from '@ci/metrics';

export const identity03Module: ModuleInfo = defineModule({
  name: '@ci/identity-03',
  layer: 'modules',
  deps: [utilsModule, usersModule, featureFlagsModule, metricsModule],
});

export function describeIdentity03(): string {
  return describeModule(identity03Module);
}
