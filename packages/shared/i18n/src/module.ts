import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { constantsModule } from '@ci/constants';
import { dateModule } from '@ci/date';

export const i18nModule: ModuleInfo = defineModule({
  name: '@ci/i18n',
  layer: 'shared',
  deps: [utilsModule, constantsModule, dateModule],
});

export function describeI18n(): string {
  return describeModule(i18nModule);
}
