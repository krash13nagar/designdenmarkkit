import { AutocompleteProps } from '@mui/material/Autocomplete';

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
    onTextChange?: Function,
    onChange?: Function,
    hideSearchIcon?: boolean,
    renderTags?: AutocompleteProps<any, any, any, any, any>["renderTags"],
    renderOptions?: AutocompleteProps<any, any, any, any, any>["renderOption"],
    inputValueProp?: string | null,
    setInputValueProp?: Function | null,
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