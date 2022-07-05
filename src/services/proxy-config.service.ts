import { ConfigService } from '@nestjs/config';
import { Injectable, Logger } from '@nestjs/common';
import { ProxyModuleOptions, ProxyModuleOptionsFactory } from '../proxy';

@Injectable()
export class ProxyConfigService implements ProxyModuleOptionsFactory {
  constructor(private configService: ConfigService) {}

  createModuleConfig(): ProxyModuleOptions {
    //const FFDC = this.configService.get('FFDC');

    const services = [
      {
        id: 'WINES',
        url: `https://api.sampleapis.com/wines/reds`,
        config: {},
      },
      {
        id: 'COFFEES',
        url: `https://api.sampleapis.com/coffee/hot`,
        config: {},
      },
    ];

    return {
      services,
    };
  }
}
