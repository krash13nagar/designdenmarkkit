import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const MoreVert = (props: Partial<SVGTypes>) => {
  return (
    <DenSvgIcon name="Add circle" {...props}>
      <MoreVertIcon />
    </DenSvgIcon>
  );
};

export default MoreVert;
