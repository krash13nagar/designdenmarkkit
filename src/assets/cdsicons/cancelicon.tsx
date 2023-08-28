import CancelIcon from '@mui/icons-material/Cancel';
import { DenSvgIcon } from './svg';
import React from 'react';
import { SVGTypes } from './svg.types';

export const Cancel = (props: Partial<SVGTypes>) => {
  return (
    <DenSvgIcon name="Add circle" {...props}>
      <CancelIcon />
    </DenSvgIcon>
  );
};

export default Cancel;
