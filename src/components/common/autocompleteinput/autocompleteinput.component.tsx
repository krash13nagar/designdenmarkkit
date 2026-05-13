import React, { useEffect, useState } from 'react';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
} from '@mui/material/Autocomplete';
import './autocompleteinput.styles.scss';
import { DenDefautTextField } from '../defaulttextfield';
import { AutocompleteInputProps } from './autocompleteinput.types';
import { cleanXssCode } from '../../../utility/utils';
import DenInputAdornment from '../inputadornment/inputadornment.component';
import DenCircularProgress from '../circularprogress/circularprogress.component';
import DenInputLabel from '../inputlabel/inputlabel.component';
import DenAutocomplete from '../autocomplete/autocomplete.component';
import clsx from 'clsx';
import { ErrorIcon, Warning } from '../../../assets';
import DenBox from '../box/box.component';

type AutocompleteInputRestProps = Omit<
  AutocompleteInputProps,
  | 'options'
  | 'title'
  | 'limit'
  | 'disabled'
  | 'helperText'
  | 'placeholder'
  | 'useFor'
  | 'onChange'
  | 'renderTags'
  | 'renderOptions'
  | 'classes'
  | 'wrapperClass'
  | 'isError'
  | 'errorMessage'
  | 'childError'
  | 'nowrap'
  | 'shrinkLabel'
  | 'noBorder'
  | 'inputValueProp'
  | 'setInputValueProp'
>;

const AutoCompleteInputBase = (
  props: AutocompleteInputProps,
  ref: React.MutableRefObject<unknown>
) => {
  const _id = props.id;
  const readOnly = props.isReadOnly;
  const {
    options,
    title = '',
    limit,
    disabled,
    helperText,
    placeholder,
    useFor,
    renderTags,
    renderOptions,
    classes = {},
    wrapperClass,
    isError = false,
    errorMessage = '',
    childError = {},
    nowrap = false,
    shrinkLabel = false,
    noBorder = false,
    inputValueProp = null,
    setInputValueProp = null,
    ...rest
  } = props;
  const [value, setValues] = useState([]);
  const [inputValueState, setInputValueState] = React.useState('');

  const inputValue = inputValueProp || inputValueState;
  const setInputValue = setInputValueProp || setInputValueState;

  const restProps: AutocompleteInputRestProps = rest;


  const [open, setOpen] = React.useState(false);

  const loading = open;
  const disableUnderline = props.disableUnderline
    ? props.disableUnderline
    : false;

  useEffect(() => {
    setValues(props.value ? props.value : []);
  }, [props.value]);

  useEffect(() => {
    setOpen(false);
  }, [props.options]);

  const handleInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => {
    if (props.onTextChange) {
      setOpen(true);
      props.onTextChange(value, event, reason);
    }
  };

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: any,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<any>
  ) => {
    if (props.onChange) {
      props.onChange(event, value, reason, details);
    }
    setInputValue('');
  };

  const inputProps = {
    disableUnderline: disableUnderline,
    endAdornment: (
      <DenInputAdornment key={4} position="end" className="autocompleteIcon">
        {' '}
        {loading ? (
          <DenCircularProgress color="inherit" size={20} />
        ) : !props.hideSearchIcon ? (
          <SearchSharpIcon className="opacity" />
        ) : null}
      </DenInputAdornment>
    ),
  };

  return (
    <>
      <div
        className={clsx(
          'cdsAutoCompleteWrapper',
          props.isReadOnly ? ' read-only' : '',
          wrapperClass
        )}
      >
        {title && (
          <DenInputLabel
            className={clsx(
              'label-wrapper',
              shrinkLabel ? 'shrink' : '',
              'cds-input-label'
            )}
            required={props.required}
            shrink={shrinkLabel}
            htmlFor={_id}
            disabled={disabled}
          >
            {title}
          </DenInputLabel>
        )}
        <DenAutocomplete
          multiple
          freeSolo
          limitTags={limit}
          id={_id}
          options={options}
          value={value}
          disabled={disabled}
          includeInputInList
          inputValue={inputValue}
          filterOptions={(x) => x}
          getOptionLabel={(option) =>
            typeof option === 'string' ? option : option.name || ''
          }
          onChange={handleChange}
          onInputChange={handleInputChange}
          className={
            props.hideSearchIcon
              ? 'customAutoComplete ' +
              props.title.replace(/\s/g, '').toLowerCase()
              : 'customAutoComplete  hideSearchIcon ' +
              props.title.replace(/\s/g, '').toLowerCase()
          }
          classes={{
            root: 'denLabel',
            inputRoot: 'denInput',
            input: 'inputRef',
            ...classes,
          }}
          onClose={() => {
            setOpen(false);
          }}
          renderTags={renderTags}
          onClick={(event) => {
            if (props.isReadOnly) {
              event.stopPropagation();
            }
          }}
          renderOption={renderOptions}
          renderInput={(params) => (
            <>
              <DenDefautTextField
                key={3}
                ref={ref}
                {...params}
                className={`autocompleteTextField ${nowrap ? 'nowrap' : ''}`}
                placeholder={!readOnly ? placeholder : ''}
                inputProps={{
                  ...params.inputProps,
                  readOnly: Boolean(props.isReadOnly),
                }}
                InputProps={{ ...params.InputProps, ...inputProps }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' || event.key === 'Enter') {
                    event.stopPropagation();
                  }
                }}
                onChange={(event) => {
                  const newValue = event.target.value;
                  const cleanValue = cleanXssCode(newValue);
                  setInputValue(cleanValue);
                }}
                onClick={(event) => {
                  if (props.isReadOnly) {
                    event.stopPropagation();
                  }
                }}
                error={!noBorder && isError}
                {...(noBorder && {
                  sx: {
                    "& .cds-MuiOutlinedInput-notchedOutline": {
                      border: "0px !important",
                    }
                  }
                })}
              />
              <span className="helper-text">{helperText}</span>
            </>
          )}
          {...restProps}
        />
      </div>
      {(isError && errorMessage) ? (
        <DenBox sx={{ pt: '2px' }} className="has-error">
          {errorMessage}
        </DenBox>
      ) : childError?.show ? (
        <DenBox className="error-with-icon">
          {childError['level'] == 'ERROR' ? <ErrorIcon /> : <Warning />}
          <span className="errormessage">{childError['message']}</span>
        </DenBox>
      ) : null}
    </>
  );
};

export const AutoCompleteInput = React.forwardRef(AutoCompleteInputBase);
export default AutoCompleteInput;
