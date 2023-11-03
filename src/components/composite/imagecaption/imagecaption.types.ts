import { SunEditorReactProps } from 'suneditor-react/dist/types/SunEditorReactProps';

export interface ImageCaptionProps {
  caption: string;
  captionError?: string;
  captionChildError?: string;
  captionChildWarning?: string;
  onChange: (str: string) => void;
  captionTitle: string;
  captionRequired?: boolean;
  onClick?: (event: any) => void;
  captionEditorOptions?: SunEditorReactProps['setOptions'];
  countRequired?: boolean;
}
