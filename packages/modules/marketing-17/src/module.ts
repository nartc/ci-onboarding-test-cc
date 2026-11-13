import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { analyticsModule } from '@ci/analytics';
import { paymentsModule } from '@ci/payments';
import { marketingSlow16Module } from '@ci/marketing-slow-16';

export const marketing17Module: ModuleInfo = defineModule({
  name: '@ci/marketing-17',
  layer: 'modules',
  deps: [utilsModule, analyticsModule, paymentsModule, marketingSlow16Module],
});

export function describeMarketing17(): string {
  return describeModule(marketing17Module);
}
