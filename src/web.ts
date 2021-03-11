import { WebPlugin } from '@capacitor/core';

import type { NoSleepPlugin } from './definitions';

export class NoSleepWeb extends WebPlugin implements NoSleepPlugin {
  async stayAwake(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async sleep(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }
}
