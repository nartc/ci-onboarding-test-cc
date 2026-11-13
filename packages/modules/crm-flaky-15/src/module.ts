import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { recommendationsModule } from '@ci/recommendations';

export const crmFlaky15Module: ModuleInfo = defineModule({
  name: '@ci/crm-flaky-15',
  layer: 'modules',
  deps: [utilsModule, recommendationsModule],
});

export function describeCrmFlaky15(): string {
  return describeModule(crmFlaky15Module);
}
