import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { paymentsModule } from '@ci/payments';
import { identity03Module } from '@ci/identity-03';

export const identity13Module: ModuleInfo = defineModule({
  name: '@ci/identity-13',
  layer: 'modules',
  deps: [utilsModule, paymentsModule, identity03Module],
});

export function describeIdentity13(): string {
  return describeModule(identity13Module);
}
