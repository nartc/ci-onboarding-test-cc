import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { authModule } from '@ci/auth';

export const pricing01Module: ModuleInfo = defineModule({
  name: '@ci/pricing-01',
  layer: 'modules',
  deps: [utilsModule, authModule],
});

export function describePricing01(): string {
  return describeModule(pricing01Module);
}
