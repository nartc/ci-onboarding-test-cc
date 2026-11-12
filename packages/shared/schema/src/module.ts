import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { validationModule } from '@ci/validation';
import { serializerModule } from '@ci/serializer';

export const schemaModule: ModuleInfo = defineModule({
  name: '@ci/schema',
  layer: 'shared',
  deps: [utilsModule, validationModule, serializerModule],
});

export function describeSchema(): string {
  return describeModule(schemaModule);
}
