import * as React from 'react';
import { Checkbox } from '@mui/material';
import { CheckboxTypes } from './checkbox.types';

/**
 * DenCheckbox Component.
 * @constructor
 * @param {boolean} props.checked -If true, the component is checked..
 * @param {boolean} props.checkedIcon - The icon to display when the component is checked.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {	'default'| 'primary'| 'secondary'| 'error'| 'info'| 'success'| 'warning'| string} props.color - If true, the dialog is full-screen.
 * @param {React.Ref} props.inputRef - Pass a ref to the input element.
 * @param {boolean} props.required - If true, the input element is required.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenCheckbox: React.FC<CheckboxTypes> = (props) => (
  <Checkbox {...props} />
);

export default DenCheckbox;
