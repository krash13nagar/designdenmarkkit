import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';
import OpenInNew from '@mui/icons-material/OpenInNew';

export const OpenInNewIcon = (props: Partial<SVGTypes>) => {
  return (
    <DenSvgIcon name="openinnew" {...props}>
      <OpenInNew />
    </DenSvgIcon>
  );
};

export default OpenInNewIcon;
