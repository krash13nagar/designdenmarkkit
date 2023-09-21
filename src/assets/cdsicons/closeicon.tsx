import CloseIcon from '@mui/icons-material/Close';
import { DenSvgIcon, SVGTypes } from '../../components';
import React from 'react';

export const Close = (props: Partial<SVGTypes>) => {
  return (
    <DenSvgIcon name="Close icon" {...props}>
      <CloseIcon />
    </DenSvgIcon>
  );
};
