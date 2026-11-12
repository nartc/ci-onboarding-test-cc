import { runJobs } from './app.js';

console.log(
  runJobs([
    { id: 'job-1', kind: 'notify' },
    { id: 'job-2', kind: 'ship' },
  ]).join('\n'),
);
