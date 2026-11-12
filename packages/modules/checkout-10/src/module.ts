import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { shippingModule } from '@ci/shipping';
import { tracingModule } from '@ci/tracing';
import { checkout03Module } from '@ci/checkout-03';
import { catalogSlow04Module } from '@ci/catalog-slow-04';

export const checkout10Module: ModuleInfo = defineModule({
  name: '@ci/checkout-10',
  layer: 'modules',
  deps: [
    utilsModule,
    usersModule,
    shippingModule,
    tracingModule,
    checkout03Module,
    catalogSlow04Module,
  ],
});

export function describeCheckout10(): string {
  return describeModule(checkout10Module);
}
