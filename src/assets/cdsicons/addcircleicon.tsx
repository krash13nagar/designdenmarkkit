import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const AddCircle = (props: Partial<SVGTypes>) => {
  return (
    <DenSvgIcon name="Add circle" {...props}>
      <AddCircleIcon />
    </DenSvgIcon>
  );
};

export default AddCircle;
