import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ElasticSearchLoggerService } from 'src/logging/services';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: ElasticSearchLoggerService) {}

  use(req: Request, res: Response, next: NextFunction) {
      this.logger.info(req.url);

    //console.debug(`[${req.method}]-> ${req.url}`);
    next();
    //console.debug(`[${res.statusCode}]<- ${res.statusMessage}`);
  }
}
