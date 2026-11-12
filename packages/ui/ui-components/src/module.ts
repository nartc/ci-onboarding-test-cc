import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { uiPrimitivesModule } from '@ci/ui-primitives';
import { i18nModule } from '@ci/i18n';
import { dateModule } from '@ci/date';

export const uiComponentsModule: ModuleInfo = defineModule({
  name: '@ci/ui-components',
  layer: 'ui',
  deps: [utilsModule, uiPrimitivesModule, i18nModule, dateModule],
});

export function describeUiComponents(): string {
  return describeModule(uiComponentsModule);
}
