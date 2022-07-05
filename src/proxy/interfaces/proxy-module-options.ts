import * as server from 'http-proxy';
import { Service } from './service';

/**
 * The ProxyModuleOptions interface.
 */
export interface ProxyModuleOptions {
  /**
   * The proxy configuration options passed to the http-proxy module.
   */
  config?: server.ServerOptions;

  /**
   * The service to use for proxying.
   */
  services?: Service[];

  /**
   * Determines if the proxy will use cookies.
   */
  allowedCookies?: string[];
}
