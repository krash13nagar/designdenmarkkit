import React from 'react';
import { DenSvgIcon } from './svg';
import { SVGTypes } from './svg.types';
import DateRange from '@mui/icons-material/DateRange';

export const DateRangeIcon = (props: SVGTypes) => (
  <DenSvgIcon {...props}>
    <DateRange />
  </DenSvgIcon>
);
