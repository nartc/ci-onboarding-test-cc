import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { metricsModule } from '@ci/metrics';
import { schemaModule } from '@ci/schema';

export const financeSlow08Module: ModuleInfo = defineModule({
  name: '@ci/finance-slow-08',
  layer: 'modules',
  deps: [utilsModule, metricsModule, schemaModule],
});

export function describeFinanceSlow08(): string {
  return describeModule(financeSlow08Module);
}
