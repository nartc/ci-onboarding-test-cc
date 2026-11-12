import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { analyticsModule } from '@ci/analytics';
import { billingModule } from '@ci/billing';
import { dateModule } from '@ci/date';
import { i18nModule } from '@ci/i18n';
import { storageModule } from '@ci/storage';

export const reportsModule: ModuleInfo = defineModule({
  name: '@ci/reports',
  layer: 'features',
  deps: [utilsModule, analyticsModule, billingModule, dateModule, i18nModule, storageModule],
});

export function describeReports(): string {
  return describeModule(reportsModule);
}
