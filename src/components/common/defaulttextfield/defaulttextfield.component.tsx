import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

export const DenDefautTextField = React.forwardRef(
  (props: TextFieldProps, ref: React.ForwardedRef<any>) => (
    <TextField {...props} ref={ref} />
  )
);

export default DenDefautTextField;
