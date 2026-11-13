import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { reportsModule } from '@ci/reports';
import { support13Module } from '@ci/support-13';
import { supportSlow12Module } from '@ci/support-slow-12';
import { pricing03Module } from '@ci/pricing-03';

export const supportCpu14Module: ModuleInfo = defineModule({
  name: '@ci/support-cpu-14',
  layer: 'modules',
  deps: [
    utilsModule,
    usersModule,
    reportsModule,
    support13Module,
    supportSlow12Module,
    pricing03Module,
  ],
});

export function describeSupportCpu14(): string {
  return describeModule(supportCpu14Module);
}
