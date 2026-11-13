import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { dbModule } from '@ci/db';

export const financeSlow04Module: ModuleInfo = defineModule({
  name: '@ci/finance-slow-04',
  layer: 'modules',
  deps: [utilsModule, dbModule],
});

export function describeFinanceSlow04(): string {
  return describeModule(financeSlow04Module);
}
