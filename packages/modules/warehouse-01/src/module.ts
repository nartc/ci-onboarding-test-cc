import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { billingModule } from '@ci/billing';
import { httpModule } from '@ci/http';

export const warehouse01Module: ModuleInfo = defineModule({
  name: '@ci/warehouse-01',
  layer: 'modules',
  deps: [utilsModule, billingModule, httpModule],
});

export function describeWarehouse01(): string {
  return describeModule(warehouse01Module);
}
