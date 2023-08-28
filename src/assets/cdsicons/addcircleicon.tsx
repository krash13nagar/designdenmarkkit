import AddCircleIcon from '@mui/icons-material/AddCircle';
import { DenSvgIcon } from './svg';
import React from 'react';
import { SVGTypes } from './svg.types';

export const AddCircle = (props: Partial<SVGTypes>) => {
  return (
    <DenSvgIcon name="Add circle" {...props}>
      <AddCircleIcon />
    </DenSvgIcon>
  );
};

export default AddCircle;
