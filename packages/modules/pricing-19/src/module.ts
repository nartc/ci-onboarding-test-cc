import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { ordersModule } from '@ci/orders';
import { recommendationsModule } from '@ci/recommendations';

export const pricing19Module: ModuleInfo = defineModule({
  name: '@ci/pricing-19',
  layer: 'modules',
  deps: [utilsModule, ordersModule, recommendationsModule],
});

export function describePricing19(): string {
  return describeModule(pricing19Module);
}
