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
  const cookie = response.headers.map['set-cookie'];
  let arr = cookie[0].split(COOKIE_PATH);
  Cookie[COOKIE_PATH] = arr[1];
  return response;
}

export function userLoggedOut() {
  Cookie.remove(COOKIE_PATH);
}

export function handleAuthResponse(response) {
  const cookie = response.headers.map['set-cookie'];
    return {
      ...response,
      token
    }
  console.log(response)
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