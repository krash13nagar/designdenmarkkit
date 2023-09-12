import { AutocompleteProps } from '@mui/material/Autocomplete';

export interface Props {
  wrapperClass?: string;
  labelClass?: string;
  timeOut?: number;
  label: string;
}

export interface DenAutoCompleteProps
  extends Props,
    AutocompleteProps<any, any, any, any, any> {}
