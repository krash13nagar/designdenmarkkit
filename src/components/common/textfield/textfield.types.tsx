import { InputLabelProps, StandardTextFieldProps } from '@mui/material';
import { TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';

export interface TextFieldProps extends StandardTextFieldProps {
  id?: string;
  value?: string;
  label?: string;
  fullWidth?: boolean;
  labelProps?: InputLabelProps;
  valueProps?: MUITextFieldProps & MUITextFieldProps['InputProps'];
  wrapperClass?: string;
  labelClass?: string;
  valueClass?: string;
  disabled?: boolean;
  showLabel?: boolean;
  errorText?: string;
  shrinkLabel?: boolean;
  noBorder?: boolean;
  isError?: boolean;
}
