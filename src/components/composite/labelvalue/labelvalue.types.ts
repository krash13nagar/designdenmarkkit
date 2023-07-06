import { FormLabelProps } from '@mui/material';
import { ReactElement, ReactHTMLElement, ReactNode } from 'react';

export interface LabelValueProps {
  label: string;
  value: string | number | ArrayOfType<string | number | object>;
  align?: AlingType;
  labelProps?: FormLabelProps;
  valueProps?: FormLabelProps;
  className?: string;
  seperator?: string | ReactNode;
  seperatorClassName?: string;
  renderValue?: (
    value: string | number | ArrayOfType<string | number | object>
  ) => ReactElement | null;
}
export type ArrayOfType<T> = T extends string
  ? string[]
  : T extends number
  ? number[]
  : T extends object
  ? object[]
  : never;
export enum AlingType {
  column = 'column',
  row = 'row',
}
