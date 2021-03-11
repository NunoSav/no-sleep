import { WebPlugin } from '@capacitor/core';

import type { NoSleepPlugin } from './definitions';

export class NoSleepWeb extends WebPlugin implements NoSleepPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
