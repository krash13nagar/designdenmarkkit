import ChevronRight from '@mui/icons-material/ChevronRight';
import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const RightArrowIcon = (props: Partial<SVGTypes>) => {
  return (
    <DenSvgIcon name="refresh" {...props}>
      <ChevronRight />
    </DenSvgIcon>
  );
};

export default RightArrowIcon;
