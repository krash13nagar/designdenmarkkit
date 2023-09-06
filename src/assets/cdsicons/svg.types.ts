import { SvgIconProps } from '@mui/material';
import { ReactNode } from 'react';

export type PropsWithChildren<P> = P & { children?: ReactNode };
export interface SVGTypes extends SvgIconProps {
  htmlColor?: string;
  hoverHtmlColor?: string;
  width?: number;
  height?: number;
  name: string;
  handleClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  sx?: any;
}
