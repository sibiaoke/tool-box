import {
  save,
  getAuthData,
  setAuthData,
  updateAuthData,
  isLoggedIn,
  getToken,
  saveToken,
  clear
} from '../src/index';

const token = 'faked token';
const auth = { name: 'Mike' };

beforeEach(() => {
  save(token, auth);
});

describe('save', () => {
  test('token', () => {
    saveToken(token);
  });
  test('auth data', () => {
    setAuthData(auth);
  });
});

describe('check', () => {
  test('is logged in', () => {
    const bool = isLoggedIn();
    expect(bool).toBeTruthy();
  });

  test('is logged out after clear', () => {
    clear();
    const bool = isLoggedIn();
    expect(bool).not.toBeTruthy();
  });
});

describe('load', () => {
  test('saved token and loaded token should be same', () => {
    const loadedToken = getToken();
    expect(loadedToken).toBe(token);
  });

  test('saved auth data and loaded auth data should be same', () => {
    const loadedAuth = getAuthData();
    expect(loadedAuth).toEqual(auth);
  });

  test('saved auth is invalid', () => {
    const { AUTH_DATA_KEY } = require('../src/constents');
    localStorage.setItem(AUTH_DATA_KEY, 'Jack');
    const loadedAuth = getAuthData();
    expect(loadedAuth).toBeNull();
  });
});

describe('update', () => {
  test('auth name', () => {
    const updatedAuth = { name: 'Sam' };
    updateAuthData('name', 'Sam');
    const loadedAuth = getAuthData();
    expect(loadedAuth).toEqual(updatedAuth);
  });

  test('not login', () => {
    clear();
    const result = updateAuthData('name', 'Sam');
    expect(result).not.toBeTruthy();
  });

  test('saved auth is invalid', () => {
    const { AUTH_DATA_KEY } = require('../src/constents');
    localStorage.setItem(AUTH_DATA_KEY, 'Jack');
    const result = updateAuthData('name', 'Sam');
    expect(result).not.toBeTruthy();
  });
});
