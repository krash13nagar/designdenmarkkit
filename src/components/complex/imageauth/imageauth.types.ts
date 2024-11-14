import { ButtonProps } from '@mui/material/Button';
import { ReactNode, MouseEventHandler } from 'react';
import { TextFieldProps } from '../../common';
import { AutocompleteInputProps } from '../../common/autocompleteinput/autocompleteinput.types';
import {
  ImageCardProps,
  TitleForUrlProps,
  PrimeCategoryProps,
  PublishDateProps,
  ActivattionStatusProps,
  LabelValueProps,
  EditorTextfieldProps,
} from '../../composite';
import { TabType } from '../../composite/simpletabs/simpletabs.types';
import { keywordsWrapperConfig } from '../keywords/keywords.types';

export interface ImageAuthoringProps
  extends ImageCardProps,
  PrimeCategoryProps,
  ActivattionStatusProps {
  metaInformation: LabelValueProps[];
  title: EditorTextfieldProps;
  titleForUrl: TitleForUrlProps;
  imageCaption: EditorTextfieldProps;
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
  metaColumnCount?: 12 | 6 | 4 | 3,
  captionBylineProps: AutocompleteInputProps,
  photographerBylineProps: AutocompleteInputProps
  captionAgencyProps: AutocompleteInputProps,
  imageAgencyProps: AutocompleteInputProps,
  isNotRelatedToAgency?: boolean,
  handleNotRelatedToAgencyChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  justificationProps?: JustificationProps,
  showAgencyMessage?: boolean,
  agencyMessage?: string,
  showBylineMessage?: boolean,
  bylineMessage?: string,
  MetadataComp?: ReactNode,
  actionButtonsList?: ActionButton[],
  imageError?: {
    message?: string
  },
  showActivationStatusEditIcon?: boolean,
  onActivationStatusEditIconClick?: MouseEventHandler<HTMLButtonElement>,
  activationStatusEditIconTitle?: string,
  parentMsid?: string
}

export interface ActionButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  label: string,
  variant?: ButtonProps['variant'],
  color?: ButtonProps['color'],
  props?: ButtonProps
}

export interface AnchorGeneric {
  [key: string]: HTMLElement;
}

export interface ImageAuthModelProps extends ImageAuthoringProps {
  containerHeader?: string;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  classes?: { root?: string }
}

export interface ImageAuthLeftSectionProps {
  metaInformation: (LabelValueProps & { component?: ReactNode })[];
  src: ImageCardProps["src"];
  classes?: { root?: string };
  imageCTAs?: { Icon: any, label: string, value: any }[];
  handleItemClick?: (selectedItemValue: string) => void,
  metaClassName?: string,
  metaColumnCount?: 12 | 6 | 4 | 3,
  imageError?: ImageAuthoringProps['imageError'],
  msid?: string,
  parentMsid?: ImageAuthoringProps['parentMsid']

}

export interface ImageAuthRightSectionProps {
  tabTitleList: TabType[];
  selectedTab?: string | number;
  handleTabChange?: (value: any) => void;
  msid?: string;
  title: ImageAuthoringProps['title'];
  titleForUrl: TitleForUrlProps;
  imageCaption: ImageAuthoringProps['imageCaption'];
  keywordConfig: keywordsWrapperConfig;
  classes?: { root?: string },
  captionBylineProps: AutocompleteInputProps,
  photographerBylineProps: AutocompleteInputProps
  captionAgencyProps: AutocompleteInputProps,
  imageAgencyProps: AutocompleteInputProps,
  handleNotRelatedToAgencyChange?: ImageAuthoringProps["handleNotRelatedToAgencyChange"],
  isNotRelatedToAgency?: ImageAuthoringProps["isNotRelatedToAgency"],
  justificationProps?: JustificationProps,
  showAgencyMessage?: ImageAuthoringProps["showAgencyMessage"],
  agencyMessage?: ImageAuthoringProps["agencyMessage"],
  showBylineMessage?: ImageAuthoringProps["showBylineMessage"],
  bylineMessage?: ImageAuthoringProps["bylineMessage"],
  MetadataComp?: ImageAuthoringProps["MetadataComp"]
}

export interface JustificationProps extends TextFieldProps {

}

export interface PrimaryDataFormProps {
  msid?: string;
  title: ImageAuthoringProps['title'];
  titleForUrl: TitleForUrlProps;
  imageCaption: ImageAuthoringProps['imageCaption'];
  classes?: { root?: string },
  captionBylineProps: AutocompleteInputProps,
  photographerBylineProps: AutocompleteInputProps
  captionAgencyProps: AutocompleteInputProps,
  imageAgencyProps: AutocompleteInputProps,
  handleNotRelatedToAgencyChange?: ImageAuthoringProps["handleNotRelatedToAgencyChange"],
  isNotRelatedToAgency?: ImageAuthoringProps["isNotRelatedToAgency"],
  justificationProps?: ImageAuthoringProps["justificationProps"],
  showAgencyMessage?: ImageAuthoringProps["showAgencyMessage"],
  agencyMessage?: ImageAuthoringProps["agencyMessage"],
  showBylineMessage?: ImageAuthoringProps["showBylineMessage"],
  bylineMessage?: ImageAuthoringProps["bylineMessage"]
}

