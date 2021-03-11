export interface NoSleepPlugin {
  /**
   * Keep mobile device screen on, preventing idle shutdown.
   */
  stayAwake(): Promise<void>;

  /**
   * Allow the mobile device screen to go idle.
   */
  sleep(): Promise<void>;
}
