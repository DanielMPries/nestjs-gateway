import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  DiskHealthIndicator,
  HealthCheckService,
  HttpHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';

@Injectable()
export class HealthService {
  public get httpHealthIndicator(): HttpHealthIndicator {
    return this._httpHealthIndicator;
  }
  constructor(
    private readonly configService: ConfigService,
    private readonly healthCheckService: HealthCheckService,
    private readonly _httpHealthIndicator: HttpHealthIndicator,
    private readonly diskHealthIndicator: DiskHealthIndicator,
    private readonly memoryHealthIndicator: MemoryHealthIndicator,
  ) {}

  checkHealth(): string {
    return 'OK';
  }

  // TODO: add more health checks
  // https://github.com/otasoft/otasoft-api/blob/master/src/health/services/health.service.ts
}
