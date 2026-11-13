import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { analyticsModule } from '@ci/analytics';
import { reportsModule } from '@ci/reports';
import { serializerModule } from '@ci/serializer';
import { checkoutCpu07Module } from '@ci/checkout-cpu-07';

export const checkout17Module: ModuleInfo = defineModule({
  name: '@ci/checkout-17',
  layer: 'modules',
  deps: [utilsModule, analyticsModule, reportsModule, serializerModule, checkoutCpu07Module],
});

export function describeCheckout17(): string {
  return describeModule(checkout17Module);
}
