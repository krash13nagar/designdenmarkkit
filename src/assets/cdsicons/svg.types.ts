import { SvgIconProps } from '@mui/material';
import { ReactNode } from 'react';

export type PropsWithChildren<P> = P & { children?: ReactNode };

export type SVGTypes = SvgIconProps & {
  hoverHtmlColor?: string;
  handleClick?: React.MouseEventHandler<HTMLOrSVGElement>;
};

