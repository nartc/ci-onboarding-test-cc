import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { authModule } from '@ci/auth';
import { analyticsModule } from '@ci/analytics';

export const marketingSlow08Module: ModuleInfo = defineModule({
  name: '@ci/marketing-slow-08',
  layer: 'modules',
  deps: [utilsModule, authModule, analyticsModule],
});

export function describeMarketingSlow08(): string {
  return describeModule(marketingSlow08Module);
}
