import InfoIcon from '@mui/icons-material/Info';
import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const Info = (props: Partial<SVGTypes>) => {
  return (
    <DenSvgIcon name="Info icon" {...props}>
      <InfoIcon />
    </DenSvgIcon>
  );
};

export default Info;
