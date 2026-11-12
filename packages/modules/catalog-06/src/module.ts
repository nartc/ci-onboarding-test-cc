import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { billingModule } from '@ci/billing';
import { auditModule } from '@ci/audit';
import { catalogFlaky05Module } from '@ci/catalog-flaky-05';
import { catalog03Module } from '@ci/catalog-03';

export const catalog06Module: ModuleInfo = defineModule({
  name: '@ci/catalog-06',
  layer: 'modules',
  deps: [
    utilsModule,
    usersModule,
    billingModule,
    auditModule,
    catalogFlaky05Module,
    catalog03Module,
  ],
});

export function describeCatalog06(): string {
  return describeModule(catalog06Module);
}
