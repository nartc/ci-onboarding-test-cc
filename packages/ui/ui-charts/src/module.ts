import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { uiComponentsModule } from '@ci/ui-components';
import { uiLayoutModule } from '@ci/ui-layout';

export const uiChartsModule: ModuleInfo = defineModule({
  name: '@ci/ui-charts',
  layer: 'ui',
  deps: [utilsModule, uiComponentsModule, uiLayoutModule],
});

export function describeUiCharts(): string {
  return describeModule(uiChartsModule);
}
