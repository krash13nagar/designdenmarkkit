import * as React from 'react';
import {TextField} from "@mui/material"
import { TextFieldProps } from './textfield.types';

export const DefaultTextField:React.FC<TextFieldProps> = React.forwardRef((props,ref)=> <TextField ref={ref}
InputLabelProps={{ shrink: true }}
style={{ width: '100%' }}
{...props}
/>
)