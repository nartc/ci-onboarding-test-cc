import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { cryptoModule } from '@ci/crypto';
import { supportSlow04Module } from '@ci/support-slow-04';

export const supportFlaky05Module: ModuleInfo = defineModule({
  name: '@ci/support-flaky-05',
  layer: 'modules',
  deps: [utilsModule, cryptoModule, supportSlow04Module],
});

export function describeSupportFlaky05(): string {
  return describeModule(supportFlaky05Module);
}
