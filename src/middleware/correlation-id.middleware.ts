import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
@Injectable()
export class CorrelationIdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const correlationHeader = req.header('x-correlation-id') || uuid();
    req.headers['x-correlation-id'] = correlationHeader;
    res.setHeader('x-correlation-id', correlationHeader);
    next();
    function uuid() {
      return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
          // eslint-disable-next-line prettier/prettier
          const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        },
      );
    }
  }
}
