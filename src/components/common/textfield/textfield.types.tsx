import {
  InputBaseProps,
  InputLabelProps,
  StandardTextFieldProps,
} from '@mui/material';

export interface TextFieldProps extends StandardTextFieldProps {
  id?: string;
  value?: string;
  label: string;
  fullWidth?: boolean;
  labelProps?: InputLabelProps;
  valueProps?: InputBaseProps;
  wrapperClass?: string;
  labelClass?: string;
  valueClass?: string;
  disabled?: boolean;
}
