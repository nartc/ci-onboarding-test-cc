import { typesModule, type ModuleInfo } from '@ci/types';

export const APP_NAME = 'ci-onboarding';
export const DEFAULT_LOCALE = 'en-US';
export const DEFAULT_TIMEZONE = 'UTC';
export const HTTP_STATUS = { ok: 200, notFound: 404, serverError: 500 } as const;

export const constantsModule: ModuleInfo = {
  name: '@ci/constants',
  layer: 'shared',
  deps: [typesModule],
};
