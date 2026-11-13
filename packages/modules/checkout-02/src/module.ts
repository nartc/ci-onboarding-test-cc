import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { authModule } from '@ci/auth';
import { billingModule } from '@ci/billing';

export const checkout02Module: ModuleInfo = defineModule({
  name: '@ci/checkout-02',
  layer: 'modules',
  deps: [utilsModule, authModule, billingModule],
});

export function describeCheckout02(): string {
  return describeModule(checkout02Module);
}
