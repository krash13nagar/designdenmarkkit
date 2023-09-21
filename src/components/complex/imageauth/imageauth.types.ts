import { TextFieldProps } from '../../common';
import {
  ImageCardProps,
  TitleForUrlProps,
  PrimeCategoryProps,
  PublishDateProps,
  ActivattionStatusProps,
  ImageCaptionProps,
  LabelValueProps,
} from '../../composite';
import { keywordsWrapperConfig } from '../keywords/keywords.types';

export interface ImageAuthoringProps
  extends ImageCardProps,
  PrimeCategoryProps,
  ActivattionStatusProps {
  metaInformation: LabelValueProps[];
  title: TextFieldProps;
  titleForUrl: TitleForUrlProps;
  imageCaption: ImageCaptionProps;
  publishDate: PublishDateProps;
  tabTitleList: string[];
  msid?: string;
  keywordConfig: keywordsWrapperConfig;
  dialogProps: any,
  metaProps: any,
  summaryProps: any
}

export interface AnchorGeneric {
  [key: string]: HTMLElement;
}

export interface ImageAuthModelProps extends ImageAuthoringProps {
  containerHeader?: string;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}
