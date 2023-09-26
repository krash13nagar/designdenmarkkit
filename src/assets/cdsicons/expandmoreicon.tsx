import ExpandMore from '@mui/icons-material/ExpandMore';
import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const ExpandMoreIcon = (props: Partial<SVGTypes>) => {
  return (
    <DenSvgIcon name="refresh" {...props}>
      <ExpandMore />
    </DenSvgIcon>
  );
};

export default ExpandMoreIcon;
