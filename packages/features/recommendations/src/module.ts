import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { searchModule } from '@ci/search';
import { analyticsModule } from '@ci/analytics';
import { usersModule } from '@ci/users';
import { featureFlagsModule } from '@ci/feature-flags';

export const recommendationsModule: ModuleInfo = defineModule({
  name: '@ci/recommendations',
  layer: 'features',
  deps: [utilsModule, searchModule, analyticsModule, usersModule, featureFlagsModule],
});

export function describeRecommendations(): string {
  return describeModule(recommendationsModule);
}
