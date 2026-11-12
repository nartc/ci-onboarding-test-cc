export type Layer =
  'shared' | 'platform' | 'features' | 'ui' | 'client' | 'modules' | 'app' | 'e2e';

export interface ModuleInfo {
  readonly name: string;
  readonly layer: Layer;
  readonly deps: readonly ModuleInfo[];
}

export const typesModule: ModuleInfo = { name: '@ci/types', layer: 'shared', deps: [] };
