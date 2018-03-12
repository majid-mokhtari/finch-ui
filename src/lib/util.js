//import Cookie from 'react-native-cookie';
import objectAssign from 'object-assign';
import { baseUrl } from './rest';

const COOKIE_PATH = 'FINCH-USER';

export let Cookie = {};

export function hasLoggedIn() {
  return getCurrentUser().token ? true : false;
}

export function getCurrentUser() {
  const currentUser = Cookie[COOKIE_PATH];
  if (currentUser) {
    return currentUser;
  }
  return {};
}

export function storeCurrentUser(response) {
  Cookie[COOKIE_PATH] = response
  return response;
}

export function userLoggedOut() {
  Cookie.remove(COOKIE_PATH);
}

export function handleAuthResponse(response) {
  const token = response.headers.get('set-cookie');
    return objectAssign({}, response, {
      token
  });
}

export function handleErrors(response) {
  if (!response.ok) {
    if (response.status === 401) {
      //Cookies.remove(COOKIE_PATH);
    }
    throw Error(response.statusText);
  }
  return response;
}