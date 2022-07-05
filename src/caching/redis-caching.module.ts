import { CacheModule, Global, Module } from '@nestjs/common';
import { CacheConfigurationService } from './config';

@Global()
@Module({
  imports: [CacheModule.registerAsync({ useClass: CacheConfigurationService })],
  exports: [CacheModule],
})
export class RedisCachingModule {}
