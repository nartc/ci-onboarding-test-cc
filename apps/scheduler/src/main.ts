import { dueAt } from './app.js';

console.log(dueAt(Math.floor(Date.now() / 60_000)).join('\n') || 'nothing due');
