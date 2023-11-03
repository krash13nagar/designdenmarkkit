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

const MetadataMultiSelect = (props: any) => {
  const _id = props.id;
  const [value, setValues] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, isLoading] = useState(false);
  // let loading = open && props?.options.length === 0;
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (props.options && value) {
      const existing: any = [];
      value.forEach((item) => {
        existing.push(item.value);
      });
      const arr: any = [];
      props.options.forEach((item: any) => {
        if (!existing.includes(item.value)) {
          arr.push(item);
        }
      });
      setOptions(arr);
    } else {
      setOptions(props.options);
    }
    isLoading(false);
  }, [props.options]);

  useEffect(() => {
    const arr: any = [];
    let items = props.value;
    if (items) {
      if (typeof items === 'string') {
        items = items.split(',');
        items.forEach((element: any) => {
          arr.push({
            title: element,
            value: element,
          });
        });
      } else {
        items.forEach((element: any) => {
          arr.push({
            title: element.value,
            value: element.value,
          });
        });
      }
    }
    setValues(arr);
    isLoading(false);
  }, [props.value]);

  const handleInputChange = (event: any, value: any) => {
    if (props.onTextChange) {
      setOpen(true);
      isLoading(true);
      props.onTextChange(props.widget.metadataDefinition.metatype, value);
    }
  };
  const handleChange = (event: any, obj: any) => {
    if (props.onChange) {
      let arr: any = [];
      obj.forEach((element: any) => {
        arr.push(element.value);
      });
      arr = arr.length > 1 ? arr.join(',') : arr.join('');
      props.onChange(
        props.widget.metadataDefinition.metatype,
        arr,
        props.olderValue,
        props.msid
      );
      setOptions([]);
    }
  };

  const inputProps = {
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

  const isEnterEnable = (metatype: any) => {
    const list: any = [];
    if (!list.length) {
      return true;
    }
    return list.includes(metatype);
  };

  return (
    <div>
      {props.title && <DenInputLabel shrink>{props.title}</DenInputLabel>}
      <DenAutocomplete
        multiple
        freeSolo
        id={_id}
        options={options}
        getOptionLabel={(option: any) => {
          return option?.value || option?.title;
        }}
        value={value}
        includeInputInList
        filterSelectedOptions
        filterOptions={(x) => x}
        onChange={handleChange}
        onInputChange={handleInputChange}
        onClose={() => {
          setOptions([]);
          if (props.onClose) {
            props.onClose();
          }
          setOpen(false);
        }}
        onClick={(event) => {
          if (props.isReadOnly) {
            event.stopPropagation();
          }
        }}
        renderInput={(params) => (
          <>
            <TextField
              {...params}
              InputProps={{ ...params.InputProps, ...inputProps }}
              onKeyDown={(event: any) => {
                if (event.key === 'Backspace') {
                  event.stopPropagation();
                }
                if (
                  event.key === 'Enter' &&
                  event.target.value &&
                  event.target.value.trim() != ''
                ) {
                  if (isEnterEnable(props.widget.metadataDefinition.metatype)) {
                    handleChange(
                      event,
                      value.concat([
                        {
                          title: event.target.value,
                          value: event.target.value,
                        },
                      ])
                    );
                    event.stopPropagation();
                  }
                }
              }}
              onClick={(event: any) => {
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
export default MetadataMultiSelect;
