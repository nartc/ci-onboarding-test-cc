import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { searchModule } from '@ci/search';
import { schemaModule } from '@ci/schema';
import { financeSlow04Module } from '@ci/finance-slow-04';
import { finance01Module } from '@ci/finance-01';

export const financeFlaky05Module: ModuleInfo = defineModule({
  name: '@ci/finance-flaky-05',
  layer: 'modules',
  deps: [utilsModule, searchModule, schemaModule, financeSlow04Module, finance01Module],
});

export function describeFinanceFlaky05(): string {
  return describeModule(financeFlaky05Module);
}
