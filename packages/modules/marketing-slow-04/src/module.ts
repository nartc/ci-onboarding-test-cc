import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { recommendationsModule } from '@ci/recommendations';
import { schemaModule } from '@ci/schema';
import { usersModule } from '@ci/users';
import { marketing03Module } from '@ci/marketing-03';

export const marketingSlow04Module: ModuleInfo = defineModule({
  name: '@ci/marketing-slow-04',
  layer: 'modules',
  deps: [utilsModule, recommendationsModule, schemaModule, usersModule, marketing03Module],
});

export function describeMarketingSlow04(): string {
  return describeModule(marketingSlow04Module);
}
