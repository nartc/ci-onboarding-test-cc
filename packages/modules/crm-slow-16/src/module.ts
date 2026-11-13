import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { recommendationsModule } from '@ci/recommendations';
import { searchModule } from '@ci/search';
import { inventoryModule } from '@ci/inventory';
import { crmFlaky15Module } from '@ci/crm-flaky-15';

export const crmSlow16Module: ModuleInfo = defineModule({
  name: '@ci/crm-slow-16',
  layer: 'modules',
  deps: [utilsModule, recommendationsModule, searchModule, inventoryModule, crmFlaky15Module],
});

export function describeCrmSlow16(): string {
  return describeModule(crmSlow16Module);
}
