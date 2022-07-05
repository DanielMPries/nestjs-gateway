import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { RedisCachingModule } from './caching/redis-caching.module';
import { HealthModule } from './health/health.module';
import { CorrelationIdMiddleware } from './middleware/correlation-id.middleware';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ProxyModule } from './proxy/proxy.module';
import { ProxyConfigService } from './services/proxy-config.service';
import { LoggingModule } from './logging/logging.module';
import { ROLLING_INDEX_MODE } from './logging/utilities';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    //RedisCachingModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    HealthModule,
    ProxyModule.forRootAsync({
      useClass: ProxyConfigService,
      imports: [ConfigModule],
    }),
    LoggingModule.forRoot({
      name: 'nest-proxy',
      indexPrefix: 'npy',
      stdout: true,
      elasticSearchClientOptions: {
        nodes: 'http://localhost:9200',
        auth: {
          username: 'elastic',
          password: 'changeme',
        },
      },
      rollingOffsetMode: ROLLING_INDEX_MODE.MONTHLY,
    }),
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // eslint-disable-next-line prettier/prettier
    consumer
      .apply(
        LoggerMiddleware, 
        CorrelationIdMiddleware)
      .forRoutes('*');
  }
}
