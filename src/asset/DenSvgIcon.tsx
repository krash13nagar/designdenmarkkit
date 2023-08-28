/* eslint-disable react/prop-types */
import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export type DenSvgIconProps = SvgIconProps & {
  hoverHtmlColor?: string;
  handleClick?: React.MouseEventHandler<HTMLOrSVGElement>;
};

const DenSvgIcon = React.forwardRef<SVGSVGElement, DenSvgIconProps>(
  (props, ref) => {
    const {
      htmlColor,
      hoverHtmlColor,
      width,
      height,
      handleClick = () => {},
      sx,
      ...otherProps
    } = props;

    const getDimension = (num: string | number) => {
      if (Number(num)) {
        return num + 'px';
      }
      return num;
    };

    return (
      <SvgIcon
        sx={[
          {
            ...(htmlColor && { color: htmlColor }),
            ...(hoverHtmlColor && {
              '&:hover': {
                color: hoverHtmlColor,
              },
            }),
            ...(width && { width: getDimension(width) }),
            ...(height && { height: getDimension(height) }),
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        onClick={handleClick}
        {...otherProps}
        ref={ref}
      >
        {props.children}
      </SvgIcon>
    );
  }
);

export default DenSvgIcon;
