#!/usr/bin/env node
// Audits one Nx Cloud CI pipeline execution (CIPE) against what a person would expect from it:
// did distribution run, did every worker do something, how much of the wall time was task work,
// how long a task waits after its dependencies finish, and did main record cache-miss timings.
//
//   node tools/lab/ci-audit.mjs [cipeId | latest | latest:<branch> | current] [--graph-dir <dir>] [--no-fail]
//
// Run it from the workspace root: the nx-cloud CLI reads nx.json. `current` (the default on
// Nx Cloud CI) finds the pipeline the job belongs to. `--graph-dir` writes each distributed run's
// task graph there (with `nx <command> --graph`) to measure dependency waits; it defaults to a
// temp folder on Nx Cloud CI. It exits 1 when anything is flagged WARN, unless `--no-fail`.
// On Nx Cloud CI it also appends the result to the step summary.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

// What "matches expectations" means. Tune these.
const T = {
  firstTaskAfterTriggerS: 120, // push to the first task on any machine
  hopP50S: 2, // dependency finished -> dependent task started, median
  workShareMin: 0.05, // task work / run wall time, for runs longer than 30 s
  idleCpuPct: 10, // average CPU per core below this, over a minute or more
};

const onCi = process.env.NX_CLOUD_CI === 'true';
const argv = process.argv.slice(2);
const opt = (name) => (argv.includes(name) ? argv[argv.indexOf(name) + 1] : undefined);
const target = argv.find((a, i) => !a.startsWith('--') && !argv[i - 1]?.startsWith('--graph'));
const noFail = argv.includes('--no-fail');
const graphDir =
  opt('--graph-dir') ??
  (onCi ? path.join(process.env.NX_CLOUD_RUNNER_TEMP ?? os.tmpdir(), 'ci-audit-graphs') : null);
if (graphDir) fs.mkdirSync(graphDir, { recursive: true });

function api(p, ...args) {
  try {
    const body = execFileSync('npx', ['-y', 'nx-cloud@latest', 'api', p, ...args], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      maxBuffer: 1 << 28,
    });
    return JSON.parse(body);
  } catch (e) {
    const err = e.stderr?.split('\n').find((l) => l.includes('"error"')) ?? e.message;
    throw new Error(`nx-cloud api ${p}: ${err}`);
  }
}
const list = (p, ...args) => api(p, '--page-size', '500', '--pages', '20', ...args).items;
const ms = (s) => (s ? Date.parse(s) : NaN);
const sec = (a, b) => (ms(b) - ms(a)) / 1000;
const fmt = (n) => (Number.isFinite(n) ? `${n.toFixed(n < 10 ? 1 : 0)}s` : '-');
const pct = (xs, p) => [...xs].sort((a, b) => a - b)[Math.floor(p * (xs.length - 1))];
const short = (name) => name.replace(/^job-[0-9a-f]+-/, '');

function findCipe(spec) {
  const execs = api('/nx-cloud/data/v0/ci', '--page-size', '30').items.filter(
    (e) => e.definition?.name === 'CI',
  );
  let match = execs;
  if (spec === 'current') {
    const pr = process.env.NX_CLOUD_REF?.match(/^refs\/pull\/(\d+)\//)?.[1];
    match = execs.filter((e) =>
      pr ? e.trigger?.pullRequestNumber === Number(pr) : e.branch === process.env.NX_CLOUD_REF_NAME,
    );
    match = match.filter((e) => !['SUCCEEDED', 'FAILED', 'CANCELED'].includes(e.status));
  } else if (spec.startsWith('latest:')) {
    match = execs.filter((e) => e.branch === spec.slice('latest:'.length));
  }
  if (!match.length) throw new Error(`no CI pipeline found for "${spec}"`);
  return match[0].links.cipe.split('/').pop();
}

const spec = target ?? (onCi ? 'current' : 'latest');
const cipeId = /^[0-9a-f]{24}$/.test(spec) ? spec : findCipe(spec);
const cipe = api(`/nx-cloud/data/v1/cipes/${cipeId}`);
const exec = api(`/nx-cloud/data/v0/ci/${cipe.ciExecutionId}`);
const jobs = list(`/nx-cloud/data/v0/ci/${cipe.ciExecutionId}/jobs`);
const runs = list('/nx-cloud/data/v1/runs', '-f', `cipeId=${cipeId}`);

const out = [];
const log = (line = '') => out.push(line);
const flags = [];
const flag = (sev, job, msg) => flags.push({ sev, job, msg });

const branch = runs[0]?.branch ?? cipe.branch;
const isMain = branch === 'main';
log(`CIPE ${cipeId}  https://cloud.nx.app/cipes/${cipeId}`);
log(`branch ${branch}  sha ${cipe.vcsContext?.headSha?.slice(0, 7)}  status ${cipe.status}`);
log(
  `wall ${fmt(sec(exec.triggeredAt, cipe.completedAt ?? new Date().toISOString()))} from trigger to ${cipe.completedAt ? 'done' : 'now'}`,
);
log();

let firstTaskAt = Infinity;
let credits = 0;
let misses = 0;
let taskCount = 0;
for (const job of jobs.sort((a, b) => ms(a.startedAt) - ms(b.startedAt))) {
  const key = job.workflowKey;
  const rgId = `${cipe.ciExecutionId}-${key}`;
  const jobRuns = runs.filter((r) => r.runGroup === rgId);
  log(
    `-- ${key}  ${job.status}  ${fmt(sec(job.startedAt, job.completedAt))}, started ${fmt(sec(exec.triggeredAt, job.startedAt))} after trigger`,
  );

  let workers = [];
  try {
    const rg = api(`/nx-cloud/data/v1/run-groups/${rgId}`);
    workers = list(`/nx-cloud/data/v1/run-groups/${rgId}/workers`);
    credits += rg.workflow?.estimatedTotalCredits ?? 0;
    const byTemplate = {};
    for (const w of workers) byTemplate[w.launchTemplate] = (byTemplate[w.launchTemplate] ?? 0) + 1;
    if (workers.length) {
      log(
        `   ${workers.length} workers ${JSON.stringify(byTemplate)}, est. ${rg.workflow?.estimatedTotalCredits} credits`,
      );
    }
  } catch {
    // The run group of a job still in progress (such as this one) answers 409.
  }

  const tasksPerWorker = {};
  for (const run of jobRuns) {
    const tasks = list(`/nx-cloud/data/v1/runs/${run.id}/tasks`);
    const started = tasks.filter((t) => t.startedAt);
    const runMisses = tasks.filter((t) => t.cacheable && t.cacheStatus === 'cache-miss').length;
    misses += runMisses;
    taskCount += tasks.length;
    for (const t of started) {
      const w = t.workerName ?? 'main job';
      tasksPerWorker[w] = (tasksPerWorker[w] ?? 0) + 1;
      firstTaskAt = Math.min(firstTaskAt, ms(t.startedAt));
    }
    const span = started.length
      ? (Math.max(...started.map((t) => ms(t.completedAt))) -
          Math.min(...started.map((t) => ms(t.startedAt)))) /
        1000
      : 0;
    const work = started.reduce((a, t) => a + ms(t.completedAt) - ms(t.startedAt), 0) / 1000;
    const replayed =
      run.isDTE && tasks.length > 10 && new Set(started.map((t) => t.startedAt)).size <= 2;
    log(
      `   run ${run.id} "${run.command}": ${tasks.length} tasks, ${runMisses} cache misses, ${fmt(span)} wall, ${fmt(work)} task work${replayed ? ', replayed from cache as one unit' : ''}`,
    );

    if (replayed) {
      flag(
        isMain ? 'warn' : 'info',
        key,
        `"${run.command}" was replayed from cache as one unit: no task reached a worker, so distribution, assignment rules and timing samples were not exercised${workers.length ? ` while ${workers.length} workers were up` : ''}`,
      );
      continue;
    }
    if (run.isDTE && runMisses === 0 && tasks.length > 10) {
      flag('info', key, `"${run.command}" had no cache misses, so it added no duration samples`);
    }
    if (run.isDTE && span > 30 && work / span < T.workShareMin) {
      flag(
        'warn',
        key,
        `"${run.command}" took ${fmt(span)} for ${fmt(work)} of task work (${((work / span) * 100).toFixed(1)}%): the time went to scheduling, not tasks`,
      );
    }

    // Dependency waits need the task graph, which the API doesn't return.
    if (!graphDir || !run.isDTE) continue;
    const graphFile = path.join(graphDir, `${run.id}.json`);
    if (!fs.existsSync(graphFile)) {
      try {
        const command = run.command.replace(/^nx\s+/, '').split(/\s+/);
        execFileSync('npx', ['nx', ...command, `--graph=${graphFile}`], { stdio: 'ignore' });
      } catch {
        log(`   (could not write the task graph for "${run.command}")`);
        continue;
      }
    }
    const deps = JSON.parse(fs.readFileSync(graphFile, 'utf8')).tasks.dependencies;
    const byId = Object.fromEntries(started.map((t) => [t.id, t]));
    const hops = [];
    for (const t of started) {
      const done = (deps[t.id] ?? []).map((d) => byId[d.id ?? d]).filter(Boolean);
      if (done.length) {
        hops.push((ms(t.startedAt) - Math.max(...done.map((d) => ms(d.completedAt)))) / 1000);
      }
    }
    if (!hops.length) continue;
    log(
      `   wait from dependencies done to task start: p50 ${fmt(pct(hops, 0.5))}, p90 ${fmt(pct(hops, 0.9))}, max ${fmt(pct(hops, 1))}, over ${hops.length} tasks`,
    );
    if (pct(hops, 0.5) > T.hopP50S) {
      flag(
        'warn',
        key,
        `"${run.command}": a task starts a median ${fmt(pct(hops, 0.5))} after its dependencies finish (threshold ${T.hopP50S}s)`,
      );
    }
  }

  const distributed = jobRuns.some((r) => r.isDTE);
  for (const w of workers) {
    const ran = tasksPerWorker[w.name] ?? 0;
    const up = sec(w.onlineAt, w.offlineAt);
    const cpu = w.avgCpu / w.cpuCores;
    log(
      `   - ${short(w.name)} ${w.launchTemplate}: online ${fmt(sec(job.startedAt, w.onlineAt))} after job start, up ${fmt(up)}, ${ran} tasks, ${cpu.toFixed(1)}% CPU/core, ${(w.maxMemory / 2 ** 30).toFixed(1)} GB max`,
    );
    if (distributed && ran === 0) {
      flag(
        'warn',
        key,
        `worker ${short(w.name)} (${w.launchTemplate}) was up ${fmt(up)} and ran no tasks`,
      );
    } else if (up > 60 && cpu < T.idleCpuPct) {
      flag(
        'info',
        key,
        `worker ${short(w.name)} (${w.launchTemplate}) averaged ${cpu.toFixed(1)}% CPU per core over ${fmt(up)}`,
      );
    }
  }
  log();
}

const firstTask = (firstTaskAt - ms(exec.triggeredAt)) / 1000;
log(
  `first task ${fmt(firstTask)} after trigger, ${taskCount} tasks, ${misses} cache misses, est. ${credits} credits`,
);
if (firstTask > T.firstTaskAfterTriggerS) {
  flag(
    'warn',
    '-',
    `the first task started ${fmt(firstTask)} after the trigger (threshold ${T.firstTaskAfterTriggerS}s)`,
  );
}
if (isMain && misses === 0) {
  flag('warn', '-', 'main had no cache misses, so nothing on main recorded duration samples');
}
if (cipe.selfHealingSkip) flag('info', '-', `self-healing skipped: ${cipe.selfHealingSkip.reason}`);

flags.sort((a, b) => (a.sev === b.sev ? 0 : a.sev === 'warn' ? -1 : 1));
const warns = flags.filter((f) => f.sev === 'warn').length;
log();
log(`FLAGS: ${warns} warn, ${flags.length - warns} info`);
for (const f of flags) log(`  ${f.sev.toUpperCase().padEnd(4)} ${f.job.padEnd(13)} ${f.msg}`);
console.log(out.join('\n'));

if (process.env.NX_CLOUD_STEP_SUMMARY) {
  const md = [
    `### CI audit: ${warns} warn, ${flags.length - warns} info`,
    '',
    ...flags.map((f) => `- **${f.sev}** \`${f.job}\` ${f.msg}`),
    '',
    '<details><summary>Per job</summary>',
    '',
    '```',
    ...out,
    '```',
    '',
    '</details>',
    '',
  ];
  fs.appendFileSync(process.env.NX_CLOUD_STEP_SUMMARY, md.join('\n'));
}
process.exitCode = warns && !noFail ? 1 : 0;
