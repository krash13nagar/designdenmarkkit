import CachedIcon from '@mui/icons-material/Cached';
import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const RefreshIcon = (props: Partial<SVGTypes>) => {
  return (
    <DenSvgIcon name="refresh" {...props}>
      <CachedIcon />
    </DenSvgIcon>
  );
};

export default RefreshIcon;
