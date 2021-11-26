import { registerPlugin } from '@capacitor/core';

import type { NoSleepPlugin } from './definitions';

const NoSleep = registerPlugin<NoSleepPlugin>('NoSleep', {
  web: () => import('./web').then((m) => new m.NoSleepWeb()),
});

export * from './definitions';
export { NoSleep };
