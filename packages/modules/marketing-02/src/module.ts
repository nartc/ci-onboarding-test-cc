import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { queueModule } from '@ci/queue';
import { usersModule } from '@ci/users';
import { authModule } from '@ci/auth';

export const marketing02Module: ModuleInfo = defineModule({
  name: '@ci/marketing-02',
  layer: 'modules',
  deps: [utilsModule, queueModule, usersModule, authModule],
});

export function describeMarketing02(): string {
  return describeModule(marketing02Module);
}
