import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { recommendationsModule } from '@ci/recommendations';
import { analyticsModule } from '@ci/analytics';
import { identity01Module } from '@ci/identity-01';

export const identityFlaky05Module: ModuleInfo = defineModule({
  name: '@ci/identity-flaky-05',
  layer: 'modules',
  deps: [utilsModule, recommendationsModule, analyticsModule, identity01Module],
});

export function describeIdentityFlaky05(): string {
  return describeModule(identityFlaky05Module);
}
