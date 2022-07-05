import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { HealthService } from '../services';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Healthchecks')
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  checkHealth(@Res() res: Response) {
    const result = {
      status: this.healthService.checkHealth(),
    };
    res.contentType('application/json');
    res.send(JSON.stringify(result));
  }
}
