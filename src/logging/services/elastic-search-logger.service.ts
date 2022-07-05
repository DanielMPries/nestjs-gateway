import { Client } from '@elastic/elasticsearch';
import { Inject } from '@nestjs/common';
import ElasticSearchLoggerOptions from '../interfaces/elastic-search-logger-options';
import { ElasticSearchLoggerUtilities } from '../utilities';
import * as os from 'os';

export class ElasticSearchLoggerService {
  private readonly client: Client;
  private indexCache: Array<string> = [];

  constructor(
    @Inject('CONFIG_OPTIONS')
    private readonly options: ElasticSearchLoggerOptions,
  ) {
    this.client = new Client(options.elasticSearchClientOptions);
  }

  public async createIndexIfNotExists(index: string, body?: any) {
    if (this.indexCache.indexOf(index) > -1) {
      return;
    }

    const result = await this.client.indices.exists({ index });
    if (!result) {
      await this.client.indices.create({
        index,
        body: body || {
          mappings: {
            properties: {
              date: {
                type: 'date',
              },

              hostname: { type: 'text' },
              level: { type: 'keyword' },
              body: { type: 'nested' },
            },
          },
        },
      });
    }

    this.indexCache.push(index);
  }

  /**
   * Primary log message handler.
   *
   * @param {string} level
   * @param message
   * @param index
   */
  public async log<T>(
    level: string,
    message: T,
    index?: string,
  ): Promise<string> {
    if (!!!index) {
      index = ElasticSearchLoggerUtilities.getRollingIndex(
        this.options.indexPrefix,
        this.options.rollingOffsetMode,
      );
    }

    await this.createIndexIfNotExists(index);

    const result = await this.client.index({
      index: index,
      body: {
        date: new Date(),
        hostname: os.hostname(),
        level,
        body: { message },
      },
    });

    if (this.options.stdout) {
      console.log(`[${this.options.name}] ${JSON.stringify(message)}`);
    }

    return result._id;
  }

  public async raw<T>(message: T, index?: string): Promise<string> {
    if (!!!index) {
      index = ElasticSearchLoggerUtilities.getRollingIndex(
        this.options.indexPrefix,
        this.options.rollingOffsetMode,
      );
    }

    await this.createIndexIfNotExists(index);

    const result = await this.client.index({
      index: index,
      body: message,
    });

    if (this.options.stdout) {
      console.log(`[${this.options.name}] ${JSON.stringify(message)}`);
    }

    return result._id;
  }

  public async info<T>(message: T, index?: string): Promise<string> {
    return this.log('info', message, index);
  }

  public async error<T>(message: T, index?: string): Promise<string> {
    return this.log('error', message, index);
  }

  public async debug<T>(message: T, index?: string): Promise<string> {
    return this.log('debug', message, index);
  }

  public async warning<T>(message: T, index?: string): Promise<string> {
    return this.log('warning', message, index);
  }

  public async trace<T>(message: T, index?: string): Promise<string> {
    return this.log('trace', message, index);
  }

  public async getLatest(index?: string) {
    if (!!!index) {
      index = `${this.options.indexPrefix}*`;
    }

    return this.client.search({
      index,
      body: {
        sort: [
          {
            date: {
              order: 'desc',
            },
          },
        ],
      },
    });
  }
}
