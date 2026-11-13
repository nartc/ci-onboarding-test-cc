import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { auditModule } from '@ci/audit';
import { paymentsModule } from '@ci/payments';
import { recommendationsModule } from '@ci/recommendations';
import { fulfillmentCpu14Module } from '@ci/fulfillment-cpu-14';

export const identity02Module: ModuleInfo = defineModule({
  name: '@ci/identity-02',
  layer: 'modules',
  deps: [utilsModule, auditModule, paymentsModule, recommendationsModule, fulfillmentCpu14Module],
});

export function describeIdentity02(): string {
  return describeModule(identity02Module);
}
