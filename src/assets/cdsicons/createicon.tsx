import CreateIcon from '@mui/icons-material/Create';
import { DenSvgIcon, SVGTypes } from '../../components';
import React from 'react';

export const Create = (props: Partial<SVGTypes>) => {
  return (
    <DenSvgIcon name="Create icon" {...props}>
      <CreateIcon />
    </DenSvgIcon>
  );
};

export default Create;
