import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { shippingModule } from '@ci/shipping';
import { identityFlaky05Module } from '@ci/identity-flaky-05';
import { identity03Module } from '@ci/identity-03';

export const identity06Module: ModuleInfo = defineModule({
  name: '@ci/identity-06',
  layer: 'modules',
  deps: [utilsModule, shippingModule, identityFlaky05Module, identity03Module],
});

export function describeIdentity06(): string {
  return describeModule(identity06Module);
}
