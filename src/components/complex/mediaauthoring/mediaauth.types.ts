import { DialogContentProps, DialogProps } from '@mui/material';
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
import { BetaKeywordsWrapperProps } from '../betakeywords/betakeywords.types';

export interface MediaAuthoringProps
  extends ImageCardProps,
  PrimeCategoryProps,
  ActivattionStatusProps {
  metaInformation: LabelValueProps[];
  title: EditorTextfieldProps;
  titleForUrl: TitleForUrlProps;
  mediaCaption: EditorTextfieldProps;
  mediaSummary: EditorTextfieldProps;
  publishDate: PublishDateProps;
  tabTitleList: TabType[];
  msid?: string;
  keywordConfig: BetaKeywordsWrapperProps;
  dialogProps?: any;
  metaProps?: any;
  summaryProps?: any;
  selectedTab?: string | number;
  handleTabChange?: (value: any) => void;
  imageCTAs?: { Icon: any, label: string, value: any }[];
  handleItemClick?: (selectedItemValue: string) => void;
  metaClassName?: string;
  metaColumnCount?: 12 | 6 | 4 | 3,
  MetadataComp?: ReactNode,
  actionButtonsList?: ActionButton[],
  mediaError?: {
    message?: string
  },
  showActivationStatusEditIcon?: boolean,
  onActivationStatusEditIconClick?: MouseEventHandler<HTMLButtonElement>,
  activationStatusEditIconTitle?: string,
  parentMsid?: string,
  slikeId?: string,
  footerCheckBoxList?: {
    label: string,
    id: string,
    disabled?: boolean,
    hide?: boolean,
    checked?: boolean,
  }[],
  onFooterCheckBoxChange?: (checkbox: { index: number | string, id: string, checked: boolean }) => void
  enableReportButton?: boolean
  reportButtonProps?: {
    onConfirm?: (value: string) => void,
    onCancel?: () => void,
    title?: string,
    message?: string,
    confirmButtonText?: string,
    cancelButtonText?: string,
    dropdownLabel?: string,
    dropdownOptions?: { id: string | number, label: string, value: string }[],
    dropdownDefaultOption?: string,
  },
  mediaUploaderLoaderProps?: {
    showProgress?: boolean,
    progressText?: string,
    progressValue?: number,
    isFileUploadInProgress?: boolean,
    uploadComplete?: boolean,
    onClose?: () => void,
    onUpload?: () => void,
    supportedTypes?: string | ReactNode
  }
  publishSectionProps?: any;
  primaryAuthorProps?: any;
  secondaryAuthorProps?: any;
  agencyProps?: any;
  thumbComp?: ReactNode;
  loading?: boolean;
}

export interface ActionButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  label: string,
  variant?: ButtonProps['variant'],
  color?: ButtonProps['color'],
  props?: ButtonProps,
  isDiscardButton?: boolean,
  toolTip?: string
}

export interface AnchorGeneric {
  [key: string]: HTMLElement;
}

export interface MediaAuthModelProps extends MediaAuthoringProps {
  containerHeader?: string;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  classes?: { root?: string },
  dialogProps?: DialogProps,
  dialogContentProps?: DialogContentProps,
  container?: DialogProps['container']
}

export interface MediaAuthLeftSectionProps {
  metaInformation: (LabelValueProps & { component?: ReactNode })[];
  src: ImageCardProps["src"];
  classes?: { root?: string };
  imageCTAs?: { Icon: any, label: string, value: any }[];
  handleItemClick?: (selectedItemValue: string) => void,
  metaClassName?: string,
  metaColumnCount?: 12 | 6 | 4 | 3,
  mediaError?: MediaAuthoringProps['mediaError'],
  msid?: string,
  parentMsid?: MediaAuthoringProps['parentMsid'],
  slikeId?: MediaAuthoringProps['slikeId'],
  thumbComp?: MediaAuthoringProps['thumbComp'],
  mediaUploaderLoaderProps?: MediaAuthoringProps['mediaUploaderLoaderProps']
}

export interface MediaAuthRightSectionProps {
  tabTitleList: TabType[];
  selectedTab?: string | number;
  handleTabChange?: (value: any) => void;
  msid?: string;
  title: MediaAuthoringProps['title'];
  titleForUrl: TitleForUrlProps;
  mediaCaption: MediaAuthoringProps['mediaCaption'];
  mediaSummary: MediaAuthoringProps['mediaSummary'];
  keywordConfig: BetaKeywordsWrapperProps;
  classes?: { root?: string },
  MetadataComp?: MediaAuthoringProps["MetadataComp"],
  publishSectionProps?: any,
  primaryAuthorProps?: any,
  secondaryAuthorProps?: any,
  agencyProps?: any
}

export interface JustificationProps extends TextFieldProps {

}

export interface MediaPrimaryDataFormProps {
  msid?: string;
  title: MediaAuthoringProps['title'];
  titleForUrl: TitleForUrlProps;
  mediaCaption: MediaAuthoringProps['mediaCaption'];
  mediaSummary: MediaAuthoringProps['mediaSummary'];
  classes?: { root?: string },
  publishSectionProps?: any,
  primaryAuthorProps?: any,
  secondaryAuthorProps?: any,
  agencyProps?: any
}

