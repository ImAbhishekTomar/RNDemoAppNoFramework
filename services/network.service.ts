import {Album} from '../App';

export class NetworkServiceBase {
  constructor() {}

  static get = async (url: string): Promise<Response> => {
    return await fetch(url, {method: 'get'});
  };

  static post = async (url: string, data: any): Promise<Response> => {
    return await fetch(url, {body: data, method: 'POST'});
  };
}

export class NetworkService {
  static photos = async (id: number | undefined): Promise<Album[]> => {
    const response = NetworkServiceBase.get(
      `https://jsonplaceholder.typicode.com/photos/${id}`,
    )
      .then(req => req.json())
      .then(json => json as Album[]);
    return Promise.resolve(response);
  };
}
