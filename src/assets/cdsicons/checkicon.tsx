import DoneAllIcon from '@mui/icons-material/DoneAll';
import { DenSvgIcon, SVGTypes } from '../../components';
import React from 'react';

export const CheckIcon = (props: Partial<SVGTypes>) => {
  return (
    <DenSvgIcon name="Check icon" {...props}>
      <DoneAllIcon />
    </DenSvgIcon>
  );
};

export default CheckIcon;
