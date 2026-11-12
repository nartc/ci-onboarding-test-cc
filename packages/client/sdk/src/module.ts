import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { httpModule } from '@ci/http';
import { authModule } from '@ci/auth';
import { schemaModule } from '@ci/schema';
import { resultModule } from '@ci/result';

export const sdkModule: ModuleInfo = defineModule({
  name: '@ci/sdk',
  layer: 'client',
  deps: [utilsModule, httpModule, authModule, schemaModule, resultModule],
});

export function describeSdk(): string {
  return describeModule(sdkModule);
}
