import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { uiPrimitivesModule } from '@ci/ui-primitives';
import { i18nModule } from '@ci/i18n';

export const uiLayoutModule: ModuleInfo = defineModule({
  name: '@ci/ui-layout',
  layer: 'ui',
  deps: [utilsModule, uiPrimitivesModule, i18nModule],
});

export function describeUiLayout(): string {
  return describeModule(uiLayoutModule);
}
