import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { queueModule } from '@ci/queue';
import { shippingModule } from '@ci/shipping';

export const supportFlaky15Module: ModuleInfo = defineModule({
  name: '@ci/support-flaky-15',
  layer: 'modules',
  deps: [utilsModule, queueModule, shippingModule],
});

export function describeSupportFlaky15(): string {
  return describeModule(supportFlaky15Module);
}
