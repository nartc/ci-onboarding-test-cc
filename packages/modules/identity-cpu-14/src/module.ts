import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { featureFlagsModule } from '@ci/feature-flags';
import { billingModule } from '@ci/billing';
import { reportsModule } from '@ci/reports';
import { identity13Module } from '@ci/identity-13';
import { identityMem09Module } from '@ci/identity-mem-09';

export const identityCpu14Module: ModuleInfo = defineModule({
  name: '@ci/identity-cpu-14',
  layer: 'modules',
  deps: [
    utilsModule,
    featureFlagsModule,
    billingModule,
    reportsModule,
    identity13Module,
    identityMem09Module,
  ],
});

export function describeIdentityCpu14(): string {
  return describeModule(identityCpu14Module);
}
