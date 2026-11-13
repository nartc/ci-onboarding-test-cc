import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { queueModule } from '@ci/queue';
import { notificationsModule } from '@ci/notifications';
import { tracingModule } from '@ci/tracing';
import { checkout10Module } from '@ci/checkout-10';
import { checkoutSlow04Module } from '@ci/checkout-slow-04';

export const checkout11Module: ModuleInfo = defineModule({
  name: '@ci/checkout-11',
  layer: 'modules',
  deps: [
    utilsModule,
    queueModule,
    notificationsModule,
    tracingModule,
    checkout10Module,
    checkoutSlow04Module,
  ],
});

export function describeCheckout11(): string {
  return describeModule(checkout11Module);
}
