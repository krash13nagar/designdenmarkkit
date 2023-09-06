import TodayIcon from '@mui/icons-material/Today';
import { DenSvgIcon } from './svg';
import React from 'react';
import { SVGTypes } from './svg.types';

export const Today = (props: SVGTypes) => {
  return (
    <DenSvgIcon {...props}>
      <TodayIcon />
    </DenSvgIcon>
  );
};
