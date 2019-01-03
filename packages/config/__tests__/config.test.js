describe('env.NODE_ENV', () => {
  const OLD_ENV = process.env.NODE_ENV;

  beforeEach(() => {
    jest.resetModules(); // this is important
    process.env.NODE_ENV = OLD_ENV;
  });

  test('is development', () => {
    process.env.NODE_ENV = 'development';
    const { isDev, isTest, isProd } = require('../src/index');
    expect(isDev).toBeTruthy();
    expect(isTest).not.toBeTruthy();
    expect(isProd).not.toBeTruthy();
  });
  test('is production', () => {
    process.env.NODE_ENV = 'production';
    const { isDev, isTest, isProd } = require('../src/index');
    expect(isDev).not.toBeTruthy();
    expect(isTest).not.toBeTruthy();
    expect(isProd).toBeTruthy();
  });
  test('is test', () => {
    process.env.NODE_ENV = 'test';
    const { isDev, isTest, isProd } = require('../src/index');
    expect(isDev).not.toBeTruthy();
    expect(isTest).toBeTruthy();
    expect(isProd).not.toBeTruthy();
  });
});
