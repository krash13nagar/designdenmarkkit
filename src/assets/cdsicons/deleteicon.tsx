import DeleteIcon from '@mui/icons-material/Delete';
import { DenSvgIcon, SVGTypes } from '../../components';
import React from 'react';

export const Delete = (props: SVGTypes) => {
  return (
    <DenSvgIcon name="Delete icon" {...props}>
      <DeleteIcon />
    </DenSvgIcon>
  );
};
