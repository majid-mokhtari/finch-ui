import { getCurrentUser } from './util';
export const baseUrl = 'http://localhost:8000/';

export const Rest = {
  baseUrl() {
    return baseUrl;
  },

  request(method, url, body, headers) {

    let targetUrl = url;
    const token = Rest._getUserToken();

    // Build up request headers
    headers = headers || {};
    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';
    if (token) {
      headers['Authorization'] = token;
    }
    
    // Build up request body
    body = body ? JSON.stringify(body) : undefined;
    return fetch(targetUrl, {
      method,
      headers,
      body
    });
  },

  get(url, body) {
    let qs = Rest._buildQueryString(body);
    url += '?' + qs;
    return Rest.request('GET', url);
  },

  post(url, body) {
    return Rest.request('POST', url, body);
  },

  put(url, body) {
    return Rest.request('PUT', url, body);
  },

  delete(url, body) {
    return Rest.request('DELETE', url, body);
  },
  
  _buildQueryString(params) {
    let str = '';
    for (var key in params) {
      if (key) {
        str += key + '=' + params[key] + '&';
      }
    }
    str = str.slice(0, str.length - 1);
    return str;
  },

  _getUserToken() {
    const currentUser = getCurrentUser();
    return currentUser.token;
  },
}