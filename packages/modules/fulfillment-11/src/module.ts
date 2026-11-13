import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { analyticsModule } from '@ci/analytics';
import { fulfillment10Module } from '@ci/fulfillment-10';

export const fulfillment11Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-11',
  layer: 'modules',
  deps: [utilsModule, analyticsModule, fulfillment10Module],
});

export function describeFulfillment11(): string {
  return describeModule(fulfillment11Module);
}
