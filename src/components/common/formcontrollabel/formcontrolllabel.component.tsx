import * as React from 'react';
import { FormControlLabelProps, FormControlLabel } from '@mui/material';

/**
 * DenformcontrFormControlLabel Component.
 * @constructor
 * @param {element} props.control -A control element. For instance, it can be a Radio, a Switch or a Checkbox.
 * @param {boolean} props.checked - If true, the component appears selected.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {"bootom"|"end"|"start"|"top"} props.labelPlacement - @default {"end"} -The position of the label.
 * @param {boolean} props.required - If true, the label will indicate that the input is required.
 * maxWidth 'xs'| 'sm'| 'md'| 'lg'| 'xl'| false| string - Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to false to disable maxWidth.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenFormControlLabel: React.FC<FormControlLabelProps> = (props) => (
  <FormControlLabel {...props} />
);

export default DenFormControlLabel;
