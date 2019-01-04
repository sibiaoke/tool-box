import Service from './Service';
import { save as saveSession, clear as clearSession } from '@sibiaoke/session';

class Auth extends Service {
  /**
   * 普通登录
   * @param {string}} username 用户名
   * @param {string} password 密码
   */
  basicLogin({ username, password }, url = '/user/auth') {
    const Authorization = 'Basic ' + btoa(`${username}:${password}`);
    return this.get(url, {}, { headers: { Authorization } }).then(data => {
      saveSession(data.accessToken, data);
      return data;
    });
  }

  /**
   * 注册
   * @param {string} mobile 手机号
   * @param {string} smsVerifyCode 验证码
   * @param {string} password 密码
   */
  registor({ mobile, smsVerifyCode, password }) {
    return this.post('/user', {}, { params: { mobile, smsVerifyCode, password } });
  }

  /**
   * 发送验证码
   * @param {string} mobile 手机号
   */
  sendSmsVerifyCode(mobile) {
    return this.get('/user/sms', { mobile });
  }

  /**
   * 登出
   */
  logout() {
    return Promise.resolve(clearSession());
  }
}

export default new Auth();
