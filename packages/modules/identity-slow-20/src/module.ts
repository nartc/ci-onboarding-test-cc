import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { recommendationsModule } from '@ci/recommendations';
import { identity11Module } from '@ci/identity-11';

export const identitySlow20Module: ModuleInfo = defineModule({
  name: '@ci/identity-slow-20',
  layer: 'modules',
  deps: [utilsModule, recommendationsModule, identity11Module],
});

export function describeIdentitySlow20(): string {
  return describeModule(identitySlow20Module);
}
