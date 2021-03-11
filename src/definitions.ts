export interface NoSleepPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
