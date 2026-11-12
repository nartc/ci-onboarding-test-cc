import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { constantsModule } from '@ci/constants';

export const uiTokensModule: ModuleInfo = defineModule({
  name: '@ci/ui-tokens',
  layer: 'ui',
  deps: [utilsModule, constantsModule],
});

export function describeUiTokens(): string {
  return describeModule(uiTokensModule);
}
