import { getLocale, saveLocale, getServerLocale } from '../src/index';

describe('save', () => {
  test('without param, default to en', () => {
    saveLocale();
    expect(getLocale()).toBe('en');
  });
  test('with param "zh"', () => {
    saveLocale('zh');
    expect(getLocale()).toBe('zh');
  });
});

describe('load', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.resetModules(); // this is important
  });
  test('default to en while is empty', () => {
    expect(getLocale()).toBe('en');
  });
  test('saved as en', () => {
    saveLocale('en');
    expect(getLocale()).toBe('en');
  });
  test('saved as zh', () => {
    saveLocale('zh');
    expect(getLocale()).toBe('zh');
  });
  test('convert "en" to server locale "en_US"', () => {
    expect(getServerLocale()).toBe('en_US');
  });
});
