import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { checkout01Module } from '@ci/checkout-01';
import { checkout02Module } from '@ci/checkout-02';
import { checkout03Module } from '@ci/checkout-03';
import { checkoutSlow04Module } from '@ci/checkout-slow-04';
import { checkoutFlaky05Module } from '@ci/checkout-flaky-05';
import { checkout06Module } from '@ci/checkout-06';
import { checkoutCpu07Module } from '@ci/checkout-cpu-07';
import { checkoutSlow08Module } from '@ci/checkout-slow-08';
import { checkoutMem09Module } from '@ci/checkout-mem-09';
import { checkout10Module } from '@ci/checkout-10';
import { checkout11Module } from '@ci/checkout-11';
import { checkoutSlow12Module } from '@ci/checkout-slow-12';
import { checkout13Module } from '@ci/checkout-13';
import { checkoutCpu14Module } from '@ci/checkout-cpu-14';
import { checkoutFlaky15Module } from '@ci/checkout-flaky-15';
import { checkoutSlow16Module } from '@ci/checkout-slow-16';
import { checkout17Module } from '@ci/checkout-17';
import { checkoutMem18Module } from '@ci/checkout-mem-18';
import { checkout19Module } from '@ci/checkout-19';
import { checkoutSlow20Module } from '@ci/checkout-slow-20';

export const checkoutModule: ModuleInfo = defineModule({
  name: '@ci/checkout',
  layer: 'modules',
  deps: [
    utilsModule,
    checkout01Module,
    checkout02Module,
    checkout03Module,
    checkoutSlow04Module,
    checkoutFlaky05Module,
    checkout06Module,
    checkoutCpu07Module,
    checkoutSlow08Module,
    checkoutMem09Module,
    checkout10Module,
    checkout11Module,
    checkoutSlow12Module,
    checkout13Module,
    checkoutCpu14Module,
    checkoutFlaky15Module,
    checkoutSlow16Module,
    checkout17Module,
    checkoutMem18Module,
    checkout19Module,
    checkoutSlow20Module,
  ],
});

export function describeCheckout(): string {
  return describeModule(checkoutModule);
}
