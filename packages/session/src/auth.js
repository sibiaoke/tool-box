import { AUTH_DATA_KEY } from './constents';
import { getToken } from './token';

export function getAuthData() {
  let data;
  try {
    data = JSON.parse(localStorage.getItem(AUTH_DATA_KEY));
  } catch (e) {
    // do nothing
    data = null;
  }
  return data;
}

export function setAuthData(data) {
  return localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(data));
}
export function updateAuthData(key, value) {
  if (!isLoggedIn()) {
    return false;
  }
  let data = getAuthData();
  data = { ...data, [key]: value };
  setAuthData(data);
}

export function isLoggedIn() {
  const token = getToken();
  const data = getAuthData();
  return Boolean(token) && Boolean(data);
}
