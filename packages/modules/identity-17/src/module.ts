import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { recommendationsModule } from '@ci/recommendations';
import { analyticsModule } from '@ci/analytics';
import { ordersModule } from '@ci/orders';
import { identitySlow16Module } from '@ci/identity-slow-16';
import { identity03Module } from '@ci/identity-03';

export const identity17Module: ModuleInfo = defineModule({
  name: '@ci/identity-17',
  layer: 'modules',
  deps: [
    utilsModule,
    recommendationsModule,
    analyticsModule,
    ordersModule,
    identitySlow16Module,
    identity03Module,
  ],
});

export function describeIdentity17(): string {
  return describeModule(identity17Module);
}
