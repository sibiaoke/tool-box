import { AUTH_DATA_KEY, AUTH_TOKEN_KEY } from './constents';
import { getAuthData, setAuthData, updateAuthData, isLoggedIn } from './auth';
import { getToken, saveToken } from './token';

export function clear() {
  localStorage.removeItem(AUTH_DATA_KEY);
  localStorage.removeItem(AUTH_TOKEN_KEY);
}
export function save(token, authData) {
  saveToken(token);
  setAuthData(authData);
}

export { getAuthData, setAuthData, updateAuthData, isLoggedIn, getToken, saveToken };
