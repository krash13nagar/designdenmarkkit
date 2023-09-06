import { PropsWithChildren, SVGTypes } from './svgicon.types';
import clsx from 'clsx';

/* eslint-disable react/prop-types */
import { SvgIcon } from '@mui/material';
import React from 'react';

export const DenSvgIcon = React.forwardRef<
  SVGSVGElement,
  PropsWithChildren<SVGTypes>
>((props, ref) => {
  const {
    htmlColor,
    hoverHtmlColor,
    width,
    name,
    height,
    handleClick = () => {},
    sx,
    className = '',
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
      className={clsx('cds-icon', className)}
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
});

export default DenSvgIcon;
