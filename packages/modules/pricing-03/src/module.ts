import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { usersModule } from '@ci/users';
import { marketingSlow16Module } from '@ci/marketing-slow-16';

export const pricing03Module: ModuleInfo = defineModule({
  name: '@ci/pricing-03',
  layer: 'modules',
  deps: [utilsModule, usersModule, marketingSlow16Module],
});

export function describePricing03(): string {
  return describeModule(pricing03Module);
}
