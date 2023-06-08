/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Common select component based on material UI. 
 * TODO: It's under development
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import {
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   FormHelperText,
// } from '@material-ui/core';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectComponent({
  onSelect,
  helperText,
  selectItems,
  value = {},
  label,
  error,
  ...props
}) {
  const [val, setVal] = useState({ name: 'Active', value: 'ACTIVE' });
  const handleSelect = (e) => {
    const selectValue = selectItems.filter(
      (selectItem) => e.target.value === selectItem?.value,
    )[0];
    setVal(val);
    onSelect(selectValue);
  };

  useEffect(() => { setVal(value); }, [value]);

  return (
    <FormControl error={error}>
      <InputLabel shrink>
        {label}
      </InputLabel>
      <Select
        {...props}
        value={val?.value}
        onChange={handleSelect}
        className={props.className}
      >
        {selectItems
          && selectItems.length
          && selectItems.map((selectItem) => (
            <MenuItem key={selectItem.name} value={selectItem.value}>
              {selectItem.name}
            </MenuItem>
          ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

SelectComponent.defaultProps = {
  helperText: '',
  value: {
    name: '',
    value: '',
  },
  defaultValue: {
    name: '',
    value: '',
  },
  className: '',
};

SelectComponent.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectItems: PropTypes.array.isRequired,
  value: PropTypes.object,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.object,
  className: PropTypes.string,
};
