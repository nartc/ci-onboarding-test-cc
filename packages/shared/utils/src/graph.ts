import type { Layer, ModuleInfo } from '@ci/types';

export function defineModule(info: {
  name: string;
  layer: Layer;
  deps: readonly ModuleInfo[];
}): ModuleInfo {
  return Object.freeze({ name: info.name, layer: info.layer, deps: Object.freeze([...info.deps]) });
}

export function depthOf(mod: ModuleInfo): number {
  return mod.deps.length === 0 ? 0 : 1 + Math.max(...mod.deps.map(depthOf));
}

export function transitiveNames(mod: ModuleInfo): string[] {
  const seen = new Set<string>();
  const visit = (m: ModuleInfo): void => {
    for (const dep of m.deps) {
      if (!seen.has(dep.name)) {
        seen.add(dep.name);
        visit(dep);
      }
    }
  };
  visit(mod);
  return [...seen].sort();
}

export function describeModule(mod: ModuleInfo, indent = 0): string {
  const line = `${'  '.repeat(indent)}${mod.name} (${mod.layer})`;
  return [line, ...mod.deps.map((d) => describeModule(d, indent + 1))].join('\n');
}
