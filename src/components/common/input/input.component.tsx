/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Common input component based on material UI
 */

import React from 'react';
import TextField from '@mui/material/TextField';
import styles from './input.module.scss';
import { InputProps } from './types';

/**
 * Component for showing input box
 *
 * @component
 * @example
 * const label = 'Title';
 * const name = 'Title';
 * const helperText = 'Title here';
 * const handleChange = (e) => {
 *  console.log(e);
 * }
 * return (
 *   <Input label="Title" name="Title" 
            onBlur={handleChange}
            onKeyUp={handleChange}
            onChange={handleChange}
            helperText="Test"  />
 * )
 */
const Input = (props: InputProps) => (
  <div className={styles['input-wrapper']}>
    <TextField
      InputLabelProps={{ shrink: true }}
      style={{ width: '100%' }}
      {...props}
    />
  </div>
);

export default Input;
