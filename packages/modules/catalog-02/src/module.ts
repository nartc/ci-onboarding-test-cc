import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { billingModule } from '@ci/billing';

export const catalog02Module: ModuleInfo = defineModule({
  name: '@ci/catalog-02',
  layer: 'modules',
  deps: [utilsModule, billingModule],
});

export function describeCatalog02(): string {
  return describeModule(catalog02Module);
}
