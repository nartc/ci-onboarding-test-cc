import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { paymentsModule } from '@ci/payments';
import { featureFlagsModule } from '@ci/feature-flags';

export const catalog03Module: ModuleInfo = defineModule({
  name: '@ci/catalog-03',
  layer: 'modules',
  deps: [utilsModule, usersModule, paymentsModule, featureFlagsModule],
});

export function describeCatalog03(): string {
  return describeModule(catalog03Module);
}
