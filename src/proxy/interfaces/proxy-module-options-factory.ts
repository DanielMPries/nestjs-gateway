import { ProxyModuleOptions } from './proxy-module-options';

/**
 * Async Options factory for the ProxyModule.
 */
export interface ProxyModuleOptionsFactory {
  /**
   * Create the ProxyModuleOptions as a Promise or synchronously.
   */
  createModuleConfig(): Promise<ProxyModuleOptions> | ProxyModuleOptions;
}
