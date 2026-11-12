import { defineModule, describeModule, utilsModule, type ModuleInfo } from '@ci/utils';
import { catalog01Module } from '@ci/catalog-01';
import { catalog02Module } from '@ci/catalog-02';
import { catalog03Module } from '@ci/catalog-03';
import { catalogSlow04Module } from '@ci/catalog-slow-04';
import { catalogFlaky05Module } from '@ci/catalog-flaky-05';
import { catalog06Module } from '@ci/catalog-06';
import { catalogCpu07Module } from '@ci/catalog-cpu-07';
import { catalogSlow08Module } from '@ci/catalog-slow-08';
import { catalogMem09Module } from '@ci/catalog-mem-09';
import { catalog10Module } from '@ci/catalog-10';
import { catalog11Module } from '@ci/catalog-11';
import { catalogSlow12Module } from '@ci/catalog-slow-12';
import { catalog13Module } from '@ci/catalog-13';
import { catalogCpu14Module } from '@ci/catalog-cpu-14';
import { catalogFlaky15Module } from '@ci/catalog-flaky-15';
import { catalogSlow16Module } from '@ci/catalog-slow-16';
import { catalog17Module } from '@ci/catalog-17';
import { catalogMem18Module } from '@ci/catalog-mem-18';
import { catalog19Module } from '@ci/catalog-19';
import { catalogSlow20Module } from '@ci/catalog-slow-20';

export const catalogModule: ModuleInfo = defineModule({
  name: '@ci/catalog',
  layer: 'modules',
  deps: [
    utilsModule,
    catalog01Module,
    catalog02Module,
    catalog03Module,
    catalogSlow04Module,
    catalogFlaky05Module,
    catalog06Module,
    catalogCpu07Module,
    catalogSlow08Module,
    catalogMem09Module,
    catalog10Module,
    catalog11Module,
    catalogSlow12Module,
    catalog13Module,
    catalogCpu14Module,
    catalogFlaky15Module,
    catalogSlow16Module,
    catalog17Module,
    catalogMem18Module,
    catalog19Module,
    catalogSlow20Module,
  ],
});

export function describeCatalog(): string {
  return describeModule(catalogModule);
}
