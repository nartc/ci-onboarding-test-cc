import { defineModule, transitiveNames, utilsModule, type ModuleInfo } from '@ci/utils';
import { configModule } from '@ci/config';
import { queueModule } from '@ci/queue';
import { notificationsModule } from '@ci/notifications';
import { reportsModule } from '@ci/reports';
import { analyticsModule } from '@ci/analytics';
import { shippingModule } from '@ci/shipping';
import { tracingModule } from '@ci/tracing';

export const workerModule: ModuleInfo = defineModule({
  name: '@ci/worker',
  layer: 'app',
  deps: [
    utilsModule,
    configModule,
    queueModule,
    notificationsModule,
    reportsModule,
    analyticsModule,
    shippingModule,
    tracingModule,
  ],
});

export interface Job {
  id: string;
  kind: 'notify' | 'report' | 'ship';
}

export function runJobs(jobs: readonly Job[]): string[] {
  const available = new Set(transitiveNames(workerModule));
  return jobs.map((job) => {
    const handler = { notify: '@ci/notifications', report: '@ci/reports', ship: '@ci/shipping' }[
      job.kind
    ];
    return available.has(handler) ? `${job.id}:done` : `${job.id}:skipped`;
  });
}
