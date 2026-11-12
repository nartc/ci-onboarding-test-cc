import { defineModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { configModule } from '@ci/config';
import { loggerModule } from '@ci/logger';
import { queueModule } from '@ci/queue';
import { reportsModule } from '@ci/reports';
import { dateModule } from '@ci/date';

export const schedulerModule: ModuleInfo = defineModule({
  name: '@ci/scheduler',
  layer: 'app',
  deps: [utilsModule, configModule, loggerModule, queueModule, reportsModule, dateModule],
});

export interface Schedule {
  task: string;
  everyMinutes: number;
}

export const schedules: readonly Schedule[] = [
  { task: 'reports.daily', everyMinutes: 1440 },
  { task: 'queue.drain', everyMinutes: 5 },
];

export function dueAt(minute: number): string[] {
  return schedules.filter((s) => minute % s.everyMinutes === 0).map((s) => s.task);
}
