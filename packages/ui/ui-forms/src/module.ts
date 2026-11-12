import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { uiComponentsModule } from '@ci/ui-components';
import { validationModule } from '@ci/validation';
import { schemaModule } from '@ci/schema';

export const uiFormsModule: ModuleInfo = defineModule({
  name: '@ci/ui-forms',
  layer: 'ui',
  deps: [utilsModule, uiComponentsModule, validationModule, schemaModule],
});

export function describeUiForms(): string {
  return describeModule(uiFormsModule);
}
