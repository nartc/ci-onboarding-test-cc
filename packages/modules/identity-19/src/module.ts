import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { dbModule } from '@ci/db';
import { identityMem18Module } from '@ci/identity-mem-18';

export const identity19Module: ModuleInfo = defineModule({
  name: '@ci/identity-19',
  layer: 'modules',
  deps: [utilsModule, dbModule, identityMem18Module],
});

export function describeIdentity19(): string {
  return describeModule(identity19Module);
}
