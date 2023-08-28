import { SvgIconProps } from '@mui/material';
import { ReactNode } from 'react';

export type PropsWithChildren<P> = P & { children?: ReactNode };
export type SVGTypes = SvgIconProps & {
  htmlColor?: string;
  hoverHtmlColor?: string;
  width?: number;
  height?: number;
  handleClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
}
