import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { identity01Module } from '@ci/identity-01';
import { identity02Module } from '@ci/identity-02';
import { identity03Module } from '@ci/identity-03';
import { identitySlow04Module } from '@ci/identity-slow-04';
import { identityFlaky05Module } from '@ci/identity-flaky-05';
import { identity06Module } from '@ci/identity-06';
import { identityCpu07Module } from '@ci/identity-cpu-07';
import { identitySlow08Module } from '@ci/identity-slow-08';
import { identityMem09Module } from '@ci/identity-mem-09';
import { identity10Module } from '@ci/identity-10';
import { identity11Module } from '@ci/identity-11';
import { identitySlow12Module } from '@ci/identity-slow-12';
import { identity13Module } from '@ci/identity-13';
import { identityCpu14Module } from '@ci/identity-cpu-14';
import { identityFlaky15Module } from '@ci/identity-flaky-15';
import { identitySlow16Module } from '@ci/identity-slow-16';
import { identity17Module } from '@ci/identity-17';
import { identityMem18Module } from '@ci/identity-mem-18';
import { identity19Module } from '@ci/identity-19';
import { identitySlow20Module } from '@ci/identity-slow-20';

export const identityModule: ModuleInfo = defineModule({
  name: '@ci/identity',
  layer: 'modules',
  deps: [
    utilsModule,
    identity01Module,
    identity02Module,
    identity03Module,
    identitySlow04Module,
    identityFlaky05Module,
    identity06Module,
    identityCpu07Module,
    identitySlow08Module,
    identityMem09Module,
    identity10Module,
    identity11Module,
    identitySlow12Module,
    identity13Module,
    identityCpu14Module,
    identityFlaky15Module,
    identitySlow16Module,
    identity17Module,
    identityMem18Module,
    identity19Module,
    identitySlow20Module,
  ],
});

export function describeIdentity(): string {
  return describeModule(identityModule);
}
