import { defineModule, transitiveNames, utilsModule, type ModuleInfo } from '@ci/utils';
import { uiChartsModule } from '@ci/ui-charts';
import { uiFormsModule } from '@ci/ui-forms';
import { uiLayoutModule } from '@ci/ui-layout';
import { sdkModule } from '@ci/sdk';
import { reportsModule } from '@ci/reports';
import { analyticsModule } from '@ci/analytics';

export const adminModule: ModuleInfo = defineModule({
  name: '@ci/admin',
  layer: 'app',
  deps: [
    utilsModule,
    uiChartsModule,
    uiFormsModule,
    uiLayoutModule,
    sdkModule,
    reportsModule,
    analyticsModule,
  ],
});

export function render(path: string): string {
  const rows = transitiveNames(adminModule)
    .map((name) => `<tr><td>${name}</td></tr>`)
    .join('');
  return `<!doctype html><html><body><h1>admin ${path}</h1><table>${rows}</table></body></html>`;
}
