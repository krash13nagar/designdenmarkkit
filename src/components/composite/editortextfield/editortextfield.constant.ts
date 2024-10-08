import { table, list, link } from 'suneditor/src/plugins';

const modeValue: 'classic' | 'inline' | 'balloon' | 'balloon-always' =
  'classic';

export const SUNEDITOR_DESCRIPTION_OPTIONS = {
  "plugins": [table, list, link],
  "defaultTag": "p",
  "resizingBar": false,
  "showPathLabel": false,
  "mode": "classic" as any,
  "value": "",
  "rtl": false,
  "katex": "window.katex",
  "tabDisable": false,
  "buttonList": [
    [
      "bold",
      "italic",
      "underline",
      "subscript",
      "superscript",
      "list",
      "link",
      "undo",
      "redo",
      "table"
    ]
  ],
  addTagsWhitelist: 'br|h[1-6]|ol|ul|li|table|thead|tbody|tr|th|td|a|b|strong|i|em|u|ins|s|strike|del|sub|sup|p|keyword',
  attributesWhitelist: {
    'table': 'border',
    'td': 'rowspan|colspan',
    'i': 'class|className|style',
    'em': 'class|className|style',
    'p': 'class|className|style|contenteditable',
    'keyword': 'keytype|smid|usetype|botkeyword|source|seopath|uid|containers|def|keywordseo|actualkeyword|contenteditable|msid|hostid'
  }
};
