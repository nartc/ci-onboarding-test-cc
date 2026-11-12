import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { reportsModule } from '@ci/reports';
import { serializerModule } from '@ci/serializer';
import { identity06Module } from '@ci/identity-06';

export const identityCpu07Module: ModuleInfo = defineModule({
  name: '@ci/identity-cpu-07',
  layer: 'modules',
  deps: [utilsModule, reportsModule, serializerModule, identity06Module],
});

export function describeIdentityCpu07(): string {
  return describeModule(identityCpu07Module);
}
