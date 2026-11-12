import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { metricsModule } from '@ci/metrics';
import { auditModule } from '@ci/audit';
import { configModule } from '@ci/config';
import { catalog10Module } from '@ci/catalog-10';
import { catalog06Module } from '@ci/catalog-06';

export const catalog11Module: ModuleInfo = defineModule({
  name: '@ci/catalog-11',
  layer: 'modules',
  deps: [utilsModule, metricsModule, auditModule, configModule, catalog10Module, catalog06Module],
});

export function describeCatalog11(): string {
  return describeModule(catalog11Module);
}
