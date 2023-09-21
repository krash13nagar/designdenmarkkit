import TodayIcon from '@mui/icons-material/Today';
import { DenSvgIcon, SVGTypes } from '../../components';
import React from 'react';

export const Today = (props: SVGTypes) => {
  return (
    <DenSvgIcon {...props}>
      <TodayIcon />
    </DenSvgIcon>
  );
};
