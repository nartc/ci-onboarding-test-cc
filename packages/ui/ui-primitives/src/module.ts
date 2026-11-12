import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { uiTokensModule } from '@ci/ui-tokens';

export const uiPrimitivesModule: ModuleInfo = defineModule({
  name: '@ci/ui-primitives',
  layer: 'ui',
  deps: [utilsModule, uiTokensModule],
});

export function describeUiPrimitives(): string {
  return describeModule(uiPrimitivesModule);
}
