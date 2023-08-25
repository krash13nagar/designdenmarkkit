import { ReactElement, ReactHTMLElement, ReactNode } from 'react';
import { FormLabelTypes } from '../../common/formlabel/formlabel.types';

export interface LabelValueProps {
  label: string;
  value: string | number | ArrayOfType<string | number | object>;
  align?: AlingType;
  labelProps?: FormLabelTypes;
  valueProps?: FormLabelTypes;
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
