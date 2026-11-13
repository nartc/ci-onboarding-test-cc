import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { queueModule } from '@ci/queue';
import { i18nModule } from '@ci/i18n';
import { storageModule } from '@ci/storage';

export const identityFlaky15Module: ModuleInfo = defineModule({
  name: '@ci/identity-flaky-15',
  layer: 'modules',
  deps: [utilsModule, queueModule, i18nModule, storageModule],
});

export function describeIdentityFlaky15(): string {
  return describeModule(identityFlaky15Module);
}
