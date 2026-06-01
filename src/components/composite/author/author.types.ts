import { ReactNode } from 'react';
import { SelectChangeEvent } from '@mui/material';

export interface DropdownOption {
  value: string;
  label?: string;
}

export interface BylineAutocompleteProps {
  [key: string]: any;
}

export interface AuthorProps {
  title?: string;
  labelComponent?: ReactNode;
  showDropdown?: boolean;
  selectedOption?: string;
  onDropdownSelect?: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
  dropdownOptions?: DropdownOption[];
  disabled?: boolean;
  errorMessage?: string;
  bylineAutocompleteProps?: BylineAutocompleteProps;
  isError?: boolean;
  autoCompleteRef?: React.RefObject<HTMLDivElement>;
}
