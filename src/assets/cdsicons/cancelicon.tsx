import CancelIcon from '@mui/icons-material/Cancel';
import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const Cancel = (props: Partial<SVGTypes>) => {
  return (
    <DenSvgIcon name="Add circle" {...props}>
      <CancelIcon />
    </DenSvgIcon>
  );
};

export default Cancel;
