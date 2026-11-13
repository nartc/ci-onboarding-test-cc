import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { billingModule } from '@ci/billing';

export const warehouse17Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-17',
  layer: 'modules',
  deps: [utilsModule, billingModule],
});

export function describeWarehouse17(): string {
  return describeModule(warehouse17Module);
}
