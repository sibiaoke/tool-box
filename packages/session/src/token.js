import { AUTH_TOKEN_KEY } from './constents';

export function getToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function saveToken(token) {
  return localStorage.setItem(AUTH_TOKEN_KEY, token);
}
