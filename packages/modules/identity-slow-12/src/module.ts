import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { featureFlagsModule } from '@ci/feature-flags';
import { eventsModule } from '@ci/events';
import { paymentsModule } from '@ci/payments';
import { identityCpu07Module } from '@ci/identity-cpu-07';

export const identitySlow12Module: ModuleInfo = defineModule({
  name: '@ci/identity-slow-12',
  layer: 'modules',
  deps: [utilsModule, featureFlagsModule, eventsModule, paymentsModule, identityCpu07Module],
});

export function describeIdentitySlow12(): string {
  return describeModule(identitySlow12Module);
}
