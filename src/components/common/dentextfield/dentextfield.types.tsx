import { InputBaseProps, InputLabelProps } from '@mui/material';

export interface TextFieldProps {
  id?: string;
  value?: string;
  label: string;
  fullWidth?: boolean;
  labelProps?: InputLabelProps;
  valueProps?: InputBaseProps;
  forwardedRef?: React.FC<InputBaseProps>;
}
