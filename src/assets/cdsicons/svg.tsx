import { SvgIcon } from '@mui/material';
import React from 'react';
import { PropsWithChildren, SVGTypes } from './svg.types';
export const DenSvgIcon = (props: PropsWithChildren<SVGTypes>) => {
  const {
    htmlColor,
    hoverHtmlColor,
    width,
    height,
    name,
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
          ...(hoverHtmlColor && { '&:hover': { color: hoverHtmlColor } }),
          width: width ? getDimension(width) : '24px',
          height: height ? getDimension(height) : '24px',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      onClick={handleClick}
      {...otherProps}
    >
      {props.children}{' '}
    </SvgIcon>
  );
};
