export default function isWechatBrowser() {
  return /micromessenger/i.test(navigator.userAgent);
}
