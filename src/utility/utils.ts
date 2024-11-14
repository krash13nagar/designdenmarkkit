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

export const copyToClipboard = async (str: string) => {

  try {
    await navigator.clipboard.writeText(str);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
