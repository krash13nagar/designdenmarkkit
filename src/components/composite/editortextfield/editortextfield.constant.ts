import { table, list, link } from 'suneditor/src/plugins';

const modeValue: 'classic' | 'inline' | 'balloon' | 'balloon-always' =
  'classic';

export const SUNEDITOR_DESCRIPTION_OPTIONS = {
  plugins: [table, list, link],
  defaultTag: 'p',
  resizingBar: false,
  showPathLabel: false,
  mode: modeValue,
  value: '',
  rtl: false,
  katex: 'window.katex',
  tabDisable: false,
  buttonList: [
    [
      'bold',
      'italic',
      'underline',
      'subscript',
      'superscript',
      'list',
      'link',
      'undo',
      'redo',
      'table',
      //"codeView"
    ],
  ],
  addTagsWhitelist:
    'cmsembed|section|br|h[1-6]|ol|ul|li|table|thead|tbody|tr|th|td|a|b|strong|i|em|u|ins|s|strike|del|sub|sup|span|p|blockquote',
  attributesWhitelist: {
    cmsembed:
      'handle|handlename|favoritecount|status|createdat|image|retweetcount|id|hostid|msid|title|mstype|mssubtype|dataSource|thumbUrl|user|url|permaLink|caption|contenttype|content|data-custom|data-msid|cmsembedattrs|id',
    table: 'border',
    td: 'rowspan|colspan',
    span: 'class|style|className|contenteditable',
    i: 'class|className|style',
    em: 'class|className|style',
    p: 'class|className|style|contenteditable',
  },
};
