import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { storageModule } from '@ci/storage';
import { featureFlagsModule } from '@ci/feature-flags';
import { dbModule } from '@ci/db';
import { fulfillment03Module } from '@ci/fulfillment-03';
import { fulfillment02Module } from '@ci/fulfillment-02';

export const fulfillmentSlow04Module: ModuleInfo = defineModule({
  name: '@ci/fulfillment-slow-04',
  layer: 'modules',
  deps: [
    utilsModule,
    storageModule,
    featureFlagsModule,
    dbModule,
    fulfillment03Module,
    fulfillment02Module,
  ],
});

export function describeFulfillmentSlow04(): string {
  return describeModule(fulfillmentSlow04Module);
}
