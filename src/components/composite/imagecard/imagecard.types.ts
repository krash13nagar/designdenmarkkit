import { ReactNode } from 'react';
import { IconMenuProps } from '../iconmenu/iconmenu.types';

export interface ImageCardProps {
  src: string;
  alt?: string;
  wrapperClassName?: string;
  imageClassName?: string;
  aspectRatio?: number;
  autoImageDimensions?: boolean,
  showIconMenu?: boolean,
  CTAs?: { Icon: any, label: string, value: any }[],
  handleItemClick?: (selectedItemValue: string) => void
}

export interface AspectRatioProps {
  src: string;
  aspectRatio: number;
  parentNode: HTMLDivElement | undefined;
}
export interface ImageStyleObject {
  width?: string | number;
  height?: string | number;
  margin?: string;
  objectFit?: string;
  maxHeight?: string | number;
}
