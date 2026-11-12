import { defineModule, transitiveNames, utilsModule, type ModuleInfo } from '@ci/utils';
import { uiComponentsModule } from '@ci/ui-components';
import { uiFormsModule } from '@ci/ui-forms';
import { uiLayoutModule } from '@ci/ui-layout';
import { sdkModule } from '@ci/sdk';
import { i18nModule } from '@ci/i18n';

export const webModule: ModuleInfo = defineModule({
  name: '@ci/web',
  layer: 'app',
  deps: [utilsModule, uiComponentsModule, uiFormsModule, uiLayoutModule, sdkModule, i18nModule],
});

export function render(path: string): string {
  const modules = transitiveNames(webModule)
    .map((name) => `<li>${name}</li>`)
    .join('');
  return `<!doctype html><html><body><h1>web ${path}</h1><ul>${modules}</ul></body></html>`;
}
