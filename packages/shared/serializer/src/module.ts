import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { validationModule } from '@ci/validation';
import { resultModule } from '@ci/result';

export const serializerModule: ModuleInfo = defineModule({
  name: '@ci/serializer',
  layer: 'shared',
  deps: [utilsModule, validationModule, resultModule],
});

export function describeSerializer(): string {
  return describeModule(serializerModule);
}
