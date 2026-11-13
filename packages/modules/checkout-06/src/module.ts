import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { billingModule } from '@ci/billing';
import { recommendationsModule } from '@ci/recommendations';
import { tracingModule } from '@ci/tracing';

export const checkout06Module: ModuleInfo = defineModule({
  name: '@ci/checkout-06',
  layer: 'modules',
  deps: [utilsModule, billingModule, recommendationsModule, tracingModule],
});

export function describeCheckout06(): string {
  return describeModule(checkout06Module);
}
