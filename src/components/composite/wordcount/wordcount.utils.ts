export const getWordCharCount = function (str: string = '') {
  var words = 0,
    characters = 0,
    spaces = 0;
  if (str) {
    var tmp = document.createElement('div');
    tmp.innerHTML = str;
    str = tmp.textContent || tmp.innerText;

    str = str.replace(
      /<table([^>]*?)data-type="([^"]*?)"([^>]*?)>([\S\s]*?)<\/table>/gi,
      ''
    );
    str = str.replace(/<cmsembed([^>]*?)>([\S\s]*?)<\/cmsembed>/gi, '');
    str = str.replace(/<\/(.*?)>/gi, ' ');
    str = str.replace(/<(.*?)>/gi, ' ');
    str = str.replace(
      /<br\s?\/?>|<\/H[1-6]>|<\/p>|<\/div>|<\/li>|<\/td>/gi,
      '\n'
    );
    str = str.replace(/\t/gi, '');
    str = str.replace(/\n/gi, ' ');
    str = str.replace(/\r/gi, '');
    str = str.replace(/[\u200B-\u200D\uFEFF]/g, '');

    str = str.trim();
    if (str !== '') {
      var arrWords = str.split(/\s+/);
      var arrSpaces = str.match(/\s/g);
      if (arrWords) words = arrWords.length;
      if (arrSpaces) spaces = arrSpaces.length;
      characters = str.length;
    }
  }
  return { words: words, characters: characters, spaces: spaces };
};
