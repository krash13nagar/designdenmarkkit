import {
    AutocompleteChangeDetails,
    AutocompleteChangeReason,
    AutocompleteInputChangeReason,
    AutocompleteProps,
} from '@mui/material/Autocomplete';
import { SyntheticEvent } from 'react';

export interface AutocompleteInputProps {
    isReadOnly?: boolean,
    title?: string,
    limit?: number,
    disabled?: boolean,
    helperText?: string,
    placeholder?: string,
    useFor?: string,
    id?: string,
    options?: any[],
    disableUnderline?: boolean,
    value?: any,
    onTextChange?: (
        value: string,
        event?: SyntheticEvent<Element, Event>,
        reason?: AutocompleteInputChangeReason
    ) => void,
    onChange?: (
        event: SyntheticEvent<Element, Event>,
        value: any,
        reason: AutocompleteChangeReason,
        details?: AutocompleteChangeDetails<any>
    ) => void,
    hideSearchIcon?: boolean,
    renderTags?: AutocompleteProps<any, any, any, any, any>["renderTags"],
    renderOptions?: AutocompleteProps<any, any, any, any, any>["renderOption"],
    inputValueProp?: string | null,
    setInputValueProp?: ((value: string) => void) | null,
    required?: boolean
    classes?: AutocompleteProps<any, any, any, any, any>["classes"],
    wrapperClass?: string,
    childError?: {
        message?: string,
        level?: "ERROR" | "WARNING",
        show?: boolean
    },
    isError?: boolean,
    errorMessage?: string,
    nowrap?: boolean,
    shrinkLabel?: boolean,
    noBorder?: boolean
}
