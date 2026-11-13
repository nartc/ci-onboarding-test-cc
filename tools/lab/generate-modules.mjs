// Generates the "modules" layer of the CI lab: many small libraries on top of the hand-written
// ones, a gateway app and its e2e suite. Run it again after changing the settings below:
//
//   node tools/lab/generate-modules.mjs && pnpm install && pnpm run format
//
// It only touches packages/modules, apps/gateway and apps/gateway-e2e.
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// ---------------------------------------------------------------------------
// Settings
// ---------------------------------------------------------------------------
const DOMAINS = [
  'catalog',
  'checkout',
  'crm',
  'finance',
  'fulfillment',
  'identity',
  'marketing',
  'pricing',
  'support',
  'warehouse',
];
const MODULES_PER_DOMAIN = 20;
const SEED = 20261112;
// Module kinds, by the module's number in its domain. The rest are "light".
const KINDS = {
  cpu: [7, 14], // test keeps every core busy, runs alone on a worker
  mem: [9, 18], // test holds a lot of memory (CI_LAB_MEM_MB)
  flaky: [5, 15], // test fails at random (CI_LAB_FLAKE_RATE)
  slow: [4, 8, 12, 16, 20], // codegen emits many files, so build and typecheck are slow
};
const SLOW_PARTS = 150;

// ---------------------------------------------------------------------------
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const pkg = (name) => `@ci/${name}`;
const camel = (s) => s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const modVar = (name) => `${camel(name)}Module`;
const json = (v) => JSON.stringify(v, null, 2) + '\n';
const write = (rel, content) => {
  const file = join(ROOT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content.replace(/^\n/, ''));
};

// Deterministic random numbers, so the graph is the same on every run.
let state = SEED;
const random = () => {
  state = (state + 0x6d2b79f5) | 0;
  let t = Math.imul(state ^ (state >>> 15), 1 | state);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const pick = (items) => items[Math.floor(random() * items.length)];

// ---------------------------------------------------------------------------
// Remove what an earlier run generated
// ---------------------------------------------------------------------------
for (const dir of ['packages/modules', 'apps/gateway', 'apps/gateway-e2e']) {
  rmSync(join(ROOT, dir), { recursive: true, force: true });
}

// ---------------------------------------------------------------------------
// Read the hand-written workspace graph
// ---------------------------------------------------------------------------
const graph = new Map(); // short name -> deps (short names)
const listPackages = (dir) =>
  existsSync(join(ROOT, dir))
    ? readdirSync(join(ROOT, dir)).filter((d) => existsSync(join(ROOT, dir, d, 'package.json')))
    : [];
const groups = {};
for (const group of readdirSync(join(ROOT, 'packages'))) {
  groups[group] = listPackages(`packages/${group}`);
  for (const d of groups[group]) readDeps(`packages/${group}/${d}`);
}
for (const d of listPackages('apps')) readDeps(`apps/${d}`);
function readDeps(dir) {
  const p = JSON.parse(readFileSync(join(ROOT, dir, 'package.json'), 'utf8'));
  const deps = Object.keys({ ...p.dependencies, ...p.devDependencies })
    .filter((n) => n.startsWith('@ci/'))
    .map((n) => n.slice(4));
  graph.set(p.name.slice(4), deps);
}

const skip = new Set(['types', 'constants', 'utils']);
const pool = [
  ...groups.features.map((n) => ({ n, w: 6 })),
  ...groups.platform.map((n) => ({ n, w: 3 })),
  ...groups.shared.filter((n) => !skip.has(n)).map((n) => ({ n, w: 1 })),
].flatMap(({ n, w }) => Array(w).fill(n));

// ---------------------------------------------------------------------------
// Plan the new projects
// ---------------------------------------------------------------------------
const kindOf = (i) => Object.keys(KINDS).find((k) => KINDS[k].includes(i)) ?? 'light';
const modules = [];
const byDomain = new Map();
DOMAINS.forEach((domain, di) => {
  const list = [];
  for (let i = 1; i <= MODULES_PER_DOMAIN; i++) {
    const kind = kindOf(i);
    const nn = String(i).padStart(2, '0');
    const name = kind === 'light' ? `${domain}-${nn}` : `${domain}-${kind}-${nn}`;
    const deps = ['utils'];
    const base = 1 + Math.floor(random() * 3);
    for (let b = 0; b < base; b++) deps.push(pick(pool));
    if (list.length && random() < 0.6) deps.push(list[list.length - 1].name);
    if (list.length > 2 && random() < 0.5) deps.push(pick(list.slice(0, -1)).name);
    if (di > 0 && random() < 0.25) deps.push(pick(byDomain.get(DOMAINS[di - 1])).name);
    const m = { name, domain, kind, deps: [...new Set(deps)] };
    list.push(m);
    modules.push(m);
  }
  byDomain.set(domain, list);
});
for (const m of modules) graph.set(m.name, m.deps);
for (const domain of DOMAINS)
  graph.set(domain, ['utils', ...byDomain.get(domain).map((m) => m.name)]);
graph.set('gateway', ['utils', 'config', 'http', ...DOMAINS]);
graph.set('gateway-e2e', ['gateway', 'sdk-mocks']);

const depthCache = new Map();
const depth = (n) => {
  if (!depthCache.has(n)) {
    const deps = graph.get(n) ?? [];
    depthCache.set(n, deps.length ? 1 + Math.max(...deps.map(depth)) : 0);
  }
  return depthCache.get(n);
};
const transitive = (n, seen = new Set()) => {
  for (const d of graph.get(n) ?? []) if (!seen.has(d) && seen.add(d)) transitive(d, seen);
  return seen;
};
const transitiveNames = (n) => [...transitive(n)].map(pkg).sort();

// ---------------------------------------------------------------------------
// Writers
// ---------------------------------------------------------------------------
const tsconfigs = (dir, levels, { lib = true } = {}) => {
  const base = `${'../'.repeat(levels)}tsconfig.base.json`;
  write(
    `${dir}/tsconfig.json`,
    json({
      extends: base,
      compilerOptions: { noEmit: true },
      include: ['src/**/*.ts', 'vitest.config.ts'],
    }),
  );
  if (lib) {
    write(
      `${dir}/tsconfig.lib.json`,
      json({
        extends: base,
        compilerOptions: { rootDir: 'src', outDir: 'dist' },
        include: ['src/**/*.ts'],
        exclude: ['src/**/*.test.ts'],
      }),
    );
  }
  write(
    `${dir}/vitest.config.ts`,
    `
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts'],
  },
});
`,
  );
};

const depsObj = (deps) => Object.fromEntries(deps.map((d) => [pkg(d), 'workspace:*']).sort());

const graphTests = (name) => {
  const v = modVar(name);
  const deps = graph.get(name);
  return `
  it('declares its direct dependencies', () => {
    expect(${v}.deps.map((d) => d.name)).toEqual(${JSON.stringify(deps.map(pkg))});
  });

  it('sits at depth ${depth(name)} of the graph', () => {
    expect(depthOf(${v})).toBe(${depth(name)});
  });

  it('reaches all ${transitive(name).size} transitive dependencies', () => {
    expect(transitiveNames(${v})).toEqual(${JSON.stringify(transitiveNames(name))});
  });
`;
};

const moduleSource = (name, layer) => {
  const others = graph.get(name).filter((d) => d !== 'utils');
  return `
import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
${others.map((d) => `import { ${modVar(d)} } from '${pkg(d)}';`).join('\n')}

export const ${modVar(name)}: ModuleInfo = defineModule({
  name: '${pkg(name)}',
  layer: '${layer}',
  deps: [${['utilsModule', ...others.map(modVar)].join(', ')}],
});

export function describe${camel(name)[0].toUpperCase() + camel(name).slice(1)}(): string {
  return describeModule(${modVar(name)});
}
`;
};

const kindTests = {
  cpu: `
import { availableParallelism } from 'node:os';
import { Worker } from 'node:worker_threads';
import { describe, expect, it } from 'vitest';

const seconds = Number(process.env['CI_LAB_CPU_SECONDS'] ?? 5);
const cores = Math.min(availableParallelism(), 16);

function burn(ms: number): Promise<number> {
  const code = \`
    const { parentPort, workerData } = require('node:worker_threads');
    const end = Date.now() + workerData;
    let x = 0;
    while (Date.now() < end) x = (x * 31 + 7) % 1000003;
    parentPort.postMessage(x);
  \`;
  return new Promise((resolve, reject) => {
    const worker = new Worker(code, { eval: true, workerData: ms });
    worker.once('message', resolve);
    worker.once('error', reject);
  });
}

describe('cpu-heavy test', () => {
  it(\`keeps \${cores} cores busy for \${seconds}s\`, async () => {
    const results = await Promise.all(Array.from({ length: cores }, () => burn(seconds * 1000)));
    expect(results).toHaveLength(cores);
  }, (seconds + 60) * 1000);
});
`,
  mem: `
import { describe, expect, it } from 'vitest';

const mb = Number(process.env['CI_LAB_MEM_MB'] ?? 2048);
const CHUNK_MB = 256;

describe('memory-heavy test', () => {
  it(\`holds \${mb} MB for 2s\`, async () => {
    const chunks: Buffer[] = [];
    for (let i = 0; i < Math.ceil(mb / CHUNK_MB); i++) {
      // A fill value writes every page, so the memory is really used.
      chunks.push(Buffer.alloc(CHUNK_MB * 1024 * 1024, i % 255));
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(chunks.reduce((total, c) => total + c.length, 0)).toBeGreaterThanOrEqual(mb * 1024 * 1024);
  }, 120_000);
});
`,
  flaky: `
import { describe, expect, it } from 'vitest';

// The rate is not a task input, so a failure and a pass share one task hash. That is how
// Nx Cloud spots flaky tasks and retries them on another worker.
const rate = Number(process.env['CI_LAB_FLAKE_RATE'] ?? 0);

describe('flaky test', () => {
  it('passes most of the time', () => {
    const roll = Math.random();
    expect(roll, \`rolled \${roll.toFixed(3)}, under the flake rate \${rate}\`).toBeGreaterThanOrEqual(rate);
  });
});
`,
  slow: `
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { partCount } from './generated/index.js';

const seconds = Number(process.env['CI_LAB_SLOW_SECONDS'] ?? 3);

describe('slow test', () => {
  it('ships every generated part', () => {
    expect(partCount).toBe(${SLOW_PARTS});
  });

  it(\`hashes for \${seconds}s on one core\`, () => {
    const end = Date.now() + seconds * 1000;
    let hash = 'seed';
    let rounds = 0;
    while (Date.now() < end) {
      hash = createHash('sha256').update(hash).digest('hex');
      rounds++;
    }
    expect(rounds).toBeGreaterThan(0);
  }, (seconds + 60) * 1000);
});
`,
};

// --- module libraries --------------------------------------------------------
for (const m of modules) {
  const dir = `packages/modules/${m.name}`;
  const scripts = {};
  const nx = { tags: ['type:lib', 'scope:modules', `domain:${m.domain}`, `kind:${m.kind}`] };
  if (m.kind === 'slow') {
    scripts.codegen = `node ../../../tools/lab/emit-parts.mjs ${SLOW_PARTS}`;
    nx.targets = {
      codegen: {
        inputs: ['{workspaceRoot}/tools/lab/emit-parts.mjs', '{projectRoot}/package.json'],
        outputs: ['{projectRoot}/src/generated'],
      },
      // The generated files are not committed, so they are not hashed. The script that writes
      // them is, so a change to it reaches these tasks' hashes.
      ...Object.fromEntries(
        [
          ['build', 'production'],
          ['typecheck', 'default'],
          ['test', 'default'],
        ].map(([t, own]) => [
          t,
          {
            dependsOn: ['codegen', '^build'],
            inputs: [own, '^production', '{workspaceRoot}/tools/lab/emit-parts.mjs'],
          },
        ]),
      ),
    };
  }
  if (m.kind === 'cpu') nx.targets = { test: { parallelism: false } };
  Object.assign(scripts, {
    build: 'tsc -p tsconfig.lib.json',
    typecheck: 'tsc -p tsconfig.json',
    lint: 'eslint .',
    test: 'vitest run',
    clean: m.kind === 'slow' ? 'rm -rf dist src/generated' : 'rm -rf dist',
  });
  write(
    `${dir}/package.json`,
    json({
      name: pkg(m.name),
      version: '0.0.0',
      private: true,
      type: 'module',
      exports: { '.': { types: './dist/index.d.ts', default: './dist/index.js' } },
      files: ['dist'],
      scripts,
      nx,
      dependencies: depsObj(m.deps),
    }),
  );
  tsconfigs(dir, 3);
  write(`${dir}/src/module.ts`, moduleSource(m.name, 'modules'));
  write(
    `${dir}/src/index.ts`,
    `${m.kind === 'slow' ? "export * from './generated/index.js';\n" : ''}export * from './module.js';\n`,
  );
  write(
    `${dir}/src/module.test.ts`,
    `
import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { ${modVar(m.name)} } from './module.js';

describe('${pkg(m.name)}', () => {${graphTests(m.name)}});
`,
  );
  if (kindTests[m.kind]) write(`${dir}/src/${m.kind}.test.ts`, kindTests[m.kind]);
}

// --- one library per domain --------------------------------------------------
for (const domain of DOMAINS) {
  const dir = `packages/modules/${domain}`;
  write(
    `${dir}/package.json`,
    json({
      name: pkg(domain),
      version: '0.0.0',
      private: true,
      type: 'module',
      exports: { '.': { types: './dist/index.d.ts', default: './dist/index.js' } },
      files: ['dist'],
      scripts: {
        build: 'tsc -p tsconfig.lib.json',
        typecheck: 'tsc -p tsconfig.json',
        lint: 'eslint .',
        test: 'vitest run',
        clean: 'rm -rf dist',
      },
      nx: { tags: ['type:lib', 'scope:modules', `domain:${domain}`, 'kind:domain'] },
      dependencies: depsObj(graph.get(domain)),
    }),
  );
  tsconfigs(dir, 3);
  write(`${dir}/src/module.ts`, moduleSource(domain, 'modules'));
  write(`${dir}/src/index.ts`, "export * from './module.js';\n");
  write(
    `${dir}/src/module.test.ts`,
    `
import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { ${modVar(domain)} } from './module.js';

describe('${pkg(domain)}', () => {${graphTests(domain)}});
`,
  );
}

// --- gateway app ------------------------------------------------------------
const GATEWAY_PORT = 4330;
{
  const dir = 'apps/gateway';
  const others = graph.get('gateway').filter((d) => d !== 'utils');
  write(
    `${dir}/package.json`,
    json({
      name: '@ci/gateway',
      version: '0.0.0',
      private: true,
      type: 'module',
      exports: { '.': { types: './dist/app.d.ts', default: './dist/app.js' } },
      files: ['dist'],
      scripts: {
        build: 'tsc -p tsconfig.lib.json',
        typecheck: 'tsc -p tsconfig.json',
        lint: 'eslint .',
        test: 'vitest run',
        serve: `PORT=${GATEWAY_PORT} node dist/main.js`,
        start: 'node dist/main.js',
        clean: 'rm -rf dist',
      },
      nx: { tags: ['type:app'], targets: { serve: { continuous: true, dependsOn: ['build'] } } },
      dependencies: depsObj(graph.get('gateway')),
    }),
  );
  tsconfigs(dir, 2);
  write(
    `${dir}/src/app.ts`,
    `
import { createServer, type Server } from 'node:http';
import { defineModule, depthOf, transitiveNames, utilsModule, type ModuleInfo } from '@ci/utils';
${others.map((d) => `import { ${modVar(d)} } from '${pkg(d)}';`).join('\n')}

export const gatewayModule: ModuleInfo = defineModule({
  name: '@ci/gateway',
  layer: 'app',
  deps: [${['utilsModule', ...others.map(modVar)].join(', ')}],
});

export interface Reply {
  status: number;
  body: unknown;
}

export function handle(method: string, url: string): Reply {
  if (method !== 'GET') return { status: 405, body: { error: 'method not allowed' } };
  if (url === '/health') return { status: 200, body: { status: 'ok' } };
  if (url === '/domains') {
    return { status: 200, body: gatewayModule.deps.filter((d) => d.layer === 'modules').map((d) => d.name) };
  }
  if (url === '/modules') return { status: 200, body: transitiveNames(gatewayModule) };
  if (url === '/depth') return { status: 200, body: { depth: depthOf(gatewayModule) } };
  return { status: 404, body: { error: 'not found' } };
}

export function createApp(): Server {
  return createServer((req, res) => {
    const reply = handle(req.method ?? 'GET', req.url ?? '/');
    res.writeHead(reply.status, { 'content-type': 'application/json' });
    res.end(JSON.stringify(reply.body));
  });
}
`,
  );
  write(
    `${dir}/src/main.ts`,
    `
import { createApp } from './app.js';

const port = Number(process.env['PORT'] ?? ${GATEWAY_PORT});
createApp().listen(port, () => {
  console.log(\`gateway listening on http://localhost:\${port}\`);
});
`,
  );
  write(
    `${dir}/src/app.test.ts`,
    `
import { depthOf, transitiveNames } from '@ci/utils';
import { describe, expect, it } from 'vitest';
import { gatewayModule, handle } from './app.js';

describe('@ci/gateway', () => {${graphTests('gateway')}
  it('lists the domains', () => {
    expect(handle('GET', '/domains').body).toEqual(${JSON.stringify(DOMAINS.map(pkg))});
  });
});
`,
  );
}

// --- gateway e2e ------------------------------------------------------------
{
  const dir = 'apps/gateway-e2e';
  write(
    `${dir}/package.json`,
    json({
      name: '@ci/gateway-e2e',
      version: '0.0.0',
      private: true,
      type: 'module',
      scripts: {
        typecheck: 'tsc -p tsconfig.json',
        lint: 'eslint .',
        e2e: 'vitest run',
        clean: 'rm -rf dist',
      },
      nx: {
        tags: ['type:e2e'],
        targets: { e2e: { dependsOn: ['^build', { projects: ['@ci/gateway'], target: 'serve' }] } },
      },
      devDependencies: depsObj(graph.get('gateway-e2e')),
    }),
  );
  tsconfigs(dir, 2, { lib: false });
  write(
    `${dir}/src/gateway.e2e.test.ts`,
    `
import { gatewayModule } from '@ci/gateway';
import { sdkMocksModule } from '@ci/sdk-mocks';
import { beforeAll, describe, expect, it } from 'vitest';

// Started by the continuous @ci/gateway:serve task this e2e target depends on.
const base = process.env['GATEWAY_URL'] ?? 'http://127.0.0.1:${GATEWAY_PORT}';

beforeAll(async () => {
  const end = Date.now() + 60_000;
  while (Date.now() < end) {
    try {
      if ((await fetch(\`\${base}/health\`)).ok) return;
    } catch {
      // not up yet
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(\`\${base} did not come up within 60s\`);
}, 70_000);

describe('gateway over http', () => {
  it('lists the domains', async () => {
    const res = await fetch(\`\${base}/domains\`);
    expect(await res.json()).toEqual(${JSON.stringify(DOMAINS.map(pkg))});
  });

  it('reaches every module', async () => {
    const res = await fetch(\`\${base}/modules\`);
    expect((await res.json()) as string[]).toHaveLength(${transitive('gateway').size});
  });

  it('reports its depth', async () => {
    const res = await fetch(\`\${base}/depth\`);
    expect(await res.json()).toEqual({ depth: ${depth('gateway')} });
  });

  it('shares the sdk mocks with the rest of the workspace', () => {
    expect(sdkMocksModule.name).toBe('@ci/sdk-mocks');
    expect(gatewayModule.name).toBe('@ci/gateway');
  });
});
`,
  );
}

const kinds = modules.reduce((acc, m) => ({ ...acc, [m.kind]: (acc[m.kind] ?? 0) + 1 }), {});
const edges = [...graph.values()].reduce((n, d) => n + d.length, 0);
console.log(
  `generated ${modules.length} modules (${JSON.stringify(kinds)}), ${DOMAINS.length} domain libraries, gateway and gateway-e2e`,
);
console.log(
  `workspace: ${graph.size} projects, ${edges} edges, gateway depth ${depth('gateway')}, gateway-e2e depth ${depth('gateway-e2e')}`,
);
