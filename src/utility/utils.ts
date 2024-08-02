export const cleanHTML = function (str = '') {
  const regex = /(<([^>]+)>)/gi;
  return str.replace(regex, '');
};

export const cleanXssCode = function (html = "") {
  if (window?.AppSDK?.common?.clean) {
    return window.AppSDK.common.clean.CleanXssCode(html);
  }
  return html;
}
