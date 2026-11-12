import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { sdkModule } from '@ci/sdk';
import { schemaModule } from '@ci/schema';

export const sdkMocksModule: ModuleInfo = defineModule({
  name: '@ci/sdk-mocks',
  layer: 'client',
  deps: [utilsModule, sdkModule, schemaModule],
});

export function describeSdkMocks(): string {
  return describeModule(sdkMocksModule);
}
