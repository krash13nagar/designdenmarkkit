export const cleanHTML = function (str = '') {
  const regex = /(<([^>]+)>)/gi;
  return str.replace(regex, '');
};
