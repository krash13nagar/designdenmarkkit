import React, { useEffect, useState } from 'react';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import {
  MetadataSingleSelectTemplate,
  MetadataSingleSelectChip,
} from './metadata.singleselect.template';
import { DenTextField } from '../../../../common/textfield/textfield.component';
import { DenInputLabel, DenCircularProgress } from '../../../../common';
import DenInputAdornment from '../../../../common/inputadornment/inputadornment.component';
import DenAutocomplete from '../../../../common/autocomplete/autocomplete.component';
import { TextField } from '@mui/material';

const MetadataSingleSelect = (props: any) => {
  const _id = props.id;
  const readOnly = props.isReadOnly;
  const [value, setMetaValue] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = useState(props.options);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    const arr = [];
    if (props.value && props.value.length) {
      arr.push({
        title: props.value,
        value: props.value,
      });
    }
    isLoading(false);
    setMetaValue(arr);
  }, [props.value]);
  useEffect(() => {
    setOptions(props.options);
    isLoading(false);
  }, [props.options]);

  const handleInputChange = (event: any, value: any) => {
    if (props.onTextChange) {
      setOpen(true);
      isLoading(true);
      props.onTextChange(props.widget.metadataDefinition.metatype, value);
    }
  };

  const handleChange = (event: any, obj: any) => {
    if (props.onChange) {
      const val = obj ? obj[0]?.value : null;
      props.onChange(
        props.widget.metadataDefinition.metatype,
        val,
        props.olderValue,
        props.msid
      );
    }
  };

  const inputProps = {
    readOnly: Boolean(value.length > 0 ? true : false),
    endAdornment: (
      <DenInputAdornment position="end" className="autocompleteIcon">
        {' '}
        {loading ? (
          <DenCircularProgress color="inherit" size={20} />
        ) : (
          <SearchSharpIcon />
        )}
      </DenInputAdornment>
    ),
  };

  return (
    <div>
      {props.title && <DenInputLabel shrink>{props.title}</DenInputLabel>}
      <DenAutocomplete
        multiple
        freeSolo
        autoComplete={false}
        limitTags={1}
        id={_id}
        options={options}
        getOptionLabel={(option: any) => {
          return option?.value || option?.title;
        }}
        value={value}
        includeInputInList
        filterSelectedOptions
        filterOptions={(x: any) => x}
        onChange={handleChange}
        onInputChange={handleInputChange}
        onClose={() => {
          if (props.onClose) {
            props.onClose();
          }
          setOpen(false);
          setOptions([]);
        }}
        onClick={(event: any) => {
          if (props.isReadOnly) {
            event.stopPropagation();
          }
        }}
        renderInput={(params) => (
          <>
            <TextField
              {...params}
              InputProps={{ ...params.InputProps, ...inputProps }}
              onKeyDown={(event) => {
                if (event.key === 'Backspace') {
                  event.stopPropagation();
                }
              }}
              onClick={(event) => {
                if (props.isReadOnly) {
                  event.stopPropagation();
                }
              }}
            />
          </>
        )}
      />
    </div>
  );
};
export default MetadataSingleSelect;
