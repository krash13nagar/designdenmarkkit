import InfoIcon from '@mui/icons-material/InfoOutlined';
import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const InfoIconOutlined = (props: Partial<SVGTypes>) => {
  return (
    <DenSvgIcon name="Info icon" {...props}>
      <InfoIcon />
    </DenSvgIcon>
  );
};

export default InfoIconOutlined;
