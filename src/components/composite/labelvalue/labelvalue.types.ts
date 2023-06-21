import { FormLabelProps } from '@mui/material';
import { ReactNode } from 'react';

export interface LabelValueProps {
  label: string;
  value: string | ReactNode;
  align?: 'row' | 'column';
  labelProps?: FormLabelProps;
  valueProps?: FormLabelProps;
  className?: string;
  seperator?: string | ReactNode;
  seperatorClassName?: string;
}
