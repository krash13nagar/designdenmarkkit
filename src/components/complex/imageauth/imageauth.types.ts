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
import { TabType } from '../../composite/simpletabs/simpletabs.types';
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
  tabTitleList: TabType[];
  msid?: string;
  keywordConfig: keywordsWrapperConfig;
  dialogProps?: any;
  metaProps?: any;
  summaryProps?: any;
  selectedTab?: string | number;
  handleTabChange?: (value: any) => void;
  imageCTAs?: { Icon: any, label: string, value: any }[];
  handleItemClick?: (selectedItemValue: string) => void;
  metaClassName?: string;
  metaColumnCount?: 12 | 6 | 4 | 3
}

export interface AnchorGeneric {
  [key: string]: HTMLElement;
}

export interface ImageAuthModelProps extends ImageAuthoringProps {
  containerHeader?: string;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ImageAuthLeftSectionProps {
  metaInformation: LabelValueProps[];
  src: ImageCardProps["src"];
  classes?: { root?: string };
  imageCTAs?: { Icon: any, label: string, value: any }[];
  handleItemClick?: (selectedItemValue: string) => void,
  metaClassName?: string,
  metaColumnCount?: 12 | 6 | 4 | 3
}

export interface ImageAuthRightSectionProps {
  tabTitleList: TabType[];
  selectedTab?: string | number;
  handleTabChange?: (value: any) => void;
  msid?: string;
  title: TextFieldProps;
  titleForUrl: TitleForUrlProps;
  imageCaption: ImageCaptionProps;
  keywordConfig: keywordsWrapperConfig;
  classes?: { root?: string }
}

export interface PrimaryDataFormProps {
  msid?: string;
  title: TextFieldProps;
  titleForUrl: TitleForUrlProps;
  imageCaption: ImageCaptionProps;
  classes?: { root?: string }
}

