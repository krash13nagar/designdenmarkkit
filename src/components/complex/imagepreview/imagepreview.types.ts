import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { MenuItemTypes } from '../../common/menuitem/menuitem.types';

export interface LabelValue {
  label: string;
  value: string | string[] | number[];
  col?: number;
  align?: string;
}
export interface ActionOptions {
  label: string;
  startIcon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  endIcon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  optionProps?: MenuItemTypes;
  disabled?: boolean;
}
export interface Action extends Partial<Omit<LabelValue, 'value'>> {
  type: MenuEnum;
  variant?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
  options?: ActionOptions[];
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}
export interface AdditionalInfo {
  header?: string;
  info: LabelValue[];
}
export interface ViewPorts {
  header?: string;
  ports: LabelValue[];
}
export interface ImagePreviewProps {
  containerHeader: string;
  msid: number;
  imageSource: string;
  selectedAspectRatio?: string;
  title: string;
  caption?: string;
  imageInfo?: LabelValue[];
  additionalInfo: AdditionalInfo;
  viewPorts: ViewPorts;
  actions: Action[];
  creationDateTime?: number;
  artDate?: number;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}
export enum MenuEnum {
  menu = 'menu',
  button = 'button',
}
export interface AnchorGeneric {
  [key: string]: HTMLElement;
}
