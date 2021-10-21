import { API_URL } from './config';
import Store from 'stores/index';
import { OutgoingHttpHeaders } from 'http2';

const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getAuthHeader = () => {
  const token = Store.UserStore.authToken;

  if (token) {
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  return {};
};

const removeUndefinedHeaders = (headers: OutgoingHttpHeaders) => {
  const cleanHeaders = { ...headers };

  Object.keys(cleanHeaders).forEach((key) => {
    if (cleanHeaders[key] === undefined) {
      delete cleanHeaders[key];
    }
  });

  return cleanHeaders;
};

export class ApiError {
  message: string;
  status: number | string;
  constructor(message: string, status: number | string) {
    this.message = message;
    this.status = status;
  }
}

export default class FetchProvider {
  host = '';
  constructor(host = API_URL) {
    this.host = host;
  }

  /* eslint-disable */
  // @ts-ignore
  url = (endpoint: string, params?: any): string => {
    let url = this.host + endpoint;

    if (!params) {
      return url;
    }

    url += '?';

    for (const key of Object.keys(params)) {
      const val = params[key] ? params[key].toString() : params[key];

      url += `${key}=${encodeURIComponent(val)}&`;
    }

    return url;
  };

  /* eslint-disable */
  // @ts-ignore
  call = async (url: string, options: any): Promise<any> => {
    const defaultHeaders = HEADERS;
    const headers = options.headers
      ? removeUndefinedHeaders(Object.assign({}, defaultHeaders, getAuthHeader(), options.headers))
      : Object.assign({}, defaultHeaders, getAuthHeader());

    const fetchOptions = Object.assign(options, { headers });

    const response = await fetch(url, fetchOptions);

    if (response.status === 401) {
      // TODO
      throw new ApiError('', response.status);
    }

    if (response.status === 403) {
      // TODO
    }

    const json = await response.json();

    if (json.error) {
      // console.error(`ApiError_${json.error.type}: ${json.error.message}`);
      throw new ApiError(json.error.message, json.error.status);
    }
    return json;
  };

  /* eslint-disable */
  // @ts-ignore
  get = (endpoint: string, params?: any): Promise<any> => {
    const url = this.url(endpoint, params);
    const options = {
      method: 'GET',
    };

    return this.call(url, options);
  };

  /* eslint-disable */
  // @ts-ignore
  post = (endpoint: string, body?: any): Promise<any> => {
    const url = this.url(endpoint);
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
    };

    return this.call(url, options);
  };

  /* eslint-disable */
  // @ts-ignore
  postData = (endpoint: string, body: any) => {
    const url = this.url(endpoint);
    const options = {
      body,
      method: 'POST',
      headers: {
        'Content-Type': undefined,
      },
    };

    return this.call(url, options);
  };

  /* eslint-disable */
  // @ts-ignore
  put = (endpoint: string, body: any): Promise<any> => {
    const url = this.url(endpoint);
    const options = {
      method: 'PUT',
      body: JSON.stringify(body),
    };

    return this.call(url, options);
  };

  /* eslint-disable */
  // @ts-ignore
  delete = (endpoint: string, params?: any): Promise<any> => {
    const url = this.url(endpoint, params);
    const options = {
      method: 'DELETE',
    };

    return this.call(url, options);
  };
}
