import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { billingModule } from '@ci/billing';
import { cryptoModule } from '@ci/crypto';
import { httpModule } from '@ci/http';
import { featureFlagsModule } from '@ci/feature-flags';

export const paymentsModule: ModuleInfo = defineModule({
  name: '@ci/payments',
  layer: 'features',
  deps: [utilsModule, billingModule, cryptoModule, httpModule, featureFlagsModule],
});

export function describePayments(): string {
  return describeModule(paymentsModule);
}
