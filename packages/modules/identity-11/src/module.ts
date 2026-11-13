import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { recommendationsModule } from '@ci/recommendations';
import { billingModule } from '@ci/billing';
import { identity10Module } from '@ci/identity-10';

export const identity11Module: ModuleInfo = defineModule({
  name: '@ci/identity-11',
  layer: 'modules',
  deps: [utilsModule, recommendationsModule, billingModule, identity10Module],
});

export function describeIdentity11(): string {
  return describeModule(identity11Module);
}
