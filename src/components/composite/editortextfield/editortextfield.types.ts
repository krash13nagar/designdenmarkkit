import { SunEditorReactProps } from 'suneditor-react/dist/types/SunEditorReactProps';

export interface EditorTextfieldProps {
  value: string;
  error?: string;
  childError?: string;
  childWarning?: string;
  onChange: (str: string) => void;
  title: string;
  required?: boolean;
  onClick?: (event: any) => void;
  editorOptions?: SunEditorReactProps['setOptions'];
  countRequired?: boolean;
  width?: string;
  height?: string;
  setAllPlugins?: boolean,
  autoFocus?: boolean,
  shrinkLabel?: boolean,
  classes?: { root?: string },
  small?: boolean,
  editorOptionsType?: 'title' | 'caption',
  placeholder?: string,
  disabled?: boolean,
  dir?: 'ltr' | 'rtl',
}
