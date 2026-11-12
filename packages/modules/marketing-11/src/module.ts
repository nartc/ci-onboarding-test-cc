import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { searchModule } from '@ci/search';
import { billingModule } from '@ci/billing';
import { notificationsModule } from '@ci/notifications';
import { marketing10Module } from '@ci/marketing-10';
import { marketing01Module } from '@ci/marketing-01';

export const marketing11Module: ModuleInfo = defineModule({
  name: '@ci/marketing-11',
  layer: 'modules',
  deps: [
    utilsModule,
    searchModule,
    billingModule,
    notificationsModule,
    marketing10Module,
    marketing01Module,
  ],
});

export function describeMarketing11(): string {
  return describeModule(marketing11Module);
}
