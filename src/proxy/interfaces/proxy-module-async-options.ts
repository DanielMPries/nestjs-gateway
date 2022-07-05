import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { ProxyModuleOptions } from './proxy-module-options';
import { ProxyModuleOptionsFactory } from './proxy-module-options-factory';

/**
 * Async Options for the ProxyModule.
 */
export interface ProxyModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<ProxyModuleOptionsFactory>;
  useClass?: Type<ProxyModuleOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<ProxyModuleOptions> | ProxyModuleOptions;
  inject?: any[];
}
