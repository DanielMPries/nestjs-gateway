/* eslint-disable prettier/prettier */
import { DynamicModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import ElasticSearchLoggerOptions from './interfaces/elastic-search-logger-options';
import { ElasticSearchLoggerService } from './services/elastic-search-logger.service';

@Module({
  providers: [
    ElasticSearchLoggerService
  ],
  exports: [ElasticSearchLoggerService],
})
export class LoggingModule {
  public static forRoot(options: ElasticSearchLoggerOptions): DynamicModule {
    return {
      module: LoggingModule,
      providers: [
        {
            provide: 'CONFIG_OPTIONS',
            useValue: options
        },
        ElasticSearchLoggerService
      ],
      exports: [ ElasticSearchLoggerService ]
    }
  }
}
