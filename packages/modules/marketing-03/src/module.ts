import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { recommendationsModule } from '@ci/recommendations';
import { analyticsModule } from '@ci/analytics';

export const marketing03Module: ModuleInfo = defineModule({
  name: '@ci/marketing-03',
  layer: 'modules',
  deps: [utilsModule, recommendationsModule, analyticsModule],
});

export function describeMarketing03(): string {
  return describeModule(marketing03Module);
}
