import { ClientOptions } from '@elastic/elasticsearch';
import { ROLLING_INDEX_MODE } from '../utilities';

export default interface ElasticSearchLoggerOptions {
  name: string;
  indexPrefix: string;
  rollingOffsetMode: ROLLING_INDEX_MODE;
  stdout: boolean;
  elasticSearchClientOptions: ClientOptions;
}
