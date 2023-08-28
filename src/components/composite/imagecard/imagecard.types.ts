import { ReactNode } from 'react';

export interface ImageCardProps {
  src: string;
  alt?: string;
  wrapperClassName?: string;
  imageClassName?: string;
  aspectRatio?: number;
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
