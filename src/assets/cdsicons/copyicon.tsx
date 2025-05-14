import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { DenSvgIcon, SVGTypes } from '../../components';
import React from 'react';

export const CopyIcon = (props: Partial<SVGTypes>) => {
  return (
    <DenSvgIcon name="Copy icon" {...props}>
      <ContentCopyIcon />
    </DenSvgIcon>
  );
};

export default CopyIcon;
