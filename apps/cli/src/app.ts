import {
  defineModule,
  depthOf,
  describeModule,
  transitiveNames,
  utilsModule,
  type ModuleInfo,
} from '@ci/utils';
import { sdkModule } from '@ci/sdk';
import { configModule } from '@ci/config';
import { loggerModule } from '@ci/logger';
import { serializerModule } from '@ci/serializer';

export const cliModule: ModuleInfo = defineModule({
  name: '@ci/cli',
  layer: 'app',
  deps: [utilsModule, sdkModule, configModule, loggerModule, serializerModule],
});

export function run(argv: readonly string[]): string {
  const [command = 'help'] = argv;
  switch (command) {
    case 'graph':
      return describeModule(cliModule);
    case 'list':
      return transitiveNames(cliModule).join('\n');
    case 'depth':
      return String(depthOf(cliModule));
    default:
      return 'usage: cli <graph|list|depth>';
  }
}
