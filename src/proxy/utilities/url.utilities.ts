import { URL } from 'url';
import { urlJoin } from './url-join';

export function getBaseURL(path) {
  const url = new URL(path);
  return url.origin;
}

export function concatPath(...args: string[]) {
  return urlJoin(...args);
}

export function isAbsolute(path) {
  return !path.indexOf('/');
}
