import { MouseEventHandler } from 'react';

export interface ViewPortBlockProps {
  aspectRatio: string;
  size?: 'small' | 'medium' | 'large';
  wrapperClassName?: string;
  blockClassName?: string;
  labelClassName?: string;
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  label?: string;
}

export interface ViewPortStyleProps {
  width: number;
  height: number;
}
