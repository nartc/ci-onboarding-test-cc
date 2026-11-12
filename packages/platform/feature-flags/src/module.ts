import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { configModule } from '@ci/config';
import { cacheModule } from '@ci/cache';
import { metricsModule } from '@ci/metrics';

export const featureFlagsModule: ModuleInfo = defineModule({
  name: '@ci/feature-flags',
  layer: 'platform',
  deps: [utilsModule, configModule, cacheModule, metricsModule],
});

export function describeFeatureFlags(): string {
  return describeModule(featureFlagsModule);
}
