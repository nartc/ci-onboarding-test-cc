import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { auditModule } from '@ci/audit';
import { paymentsModule } from '@ci/payments';
import { metricsModule } from '@ci/metrics';
import { catalogMem09Module } from '@ci/catalog-mem-09';

export const catalogFlaky15Module: ModuleInfo = defineModule({
  name: '@ci/catalog-flaky-15',
  layer: 'modules',
  deps: [utilsModule, auditModule, paymentsModule, metricsModule, catalogMem09Module],
});

export function describeCatalogFlaky15(): string {
  return describeModule(catalogFlaky15Module);
}
