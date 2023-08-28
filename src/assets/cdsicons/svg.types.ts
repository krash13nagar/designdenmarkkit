import { ReactNode } from 'react';

export type PropsWithChildren<P> = P & { children?: ReactNode };
export interface SVGTypes {
  htmlColor?: string;
  hoverHtmlColor?: string;
  width?: number;
  height?: number;
  name: string;
  handleClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  sx?: any;
}
