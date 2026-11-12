import { typesModule, type ModuleInfo } from '@ci/types';
import { defineModule } from './graph.js';

export type { Layer, ModuleInfo } from '@ci/types';
export * from './collections.js';
export * from './graph.js';

export const utilsModule: ModuleInfo = defineModule({
  name: '@ci/utils',
  layer: 'shared',
  deps: [typesModule],
});
