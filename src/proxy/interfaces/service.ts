import * as server from 'http-proxy';

/**
 * The ProxyModuleOptions interface.
 */
export interface Service {
  /**
   * A unique id that represents the service. Can be any arbitrary string.
   */
  id: string;

  /**
   * The target endpoint to proxy to.
   */
  url: string;

  /**
   * The configuration options for the service.
   */
  config?: server.ServerOptions;

  /**
   * Determines if the proxy will use a forwarded token.
   */
  forwardToken?: boolean;
}
